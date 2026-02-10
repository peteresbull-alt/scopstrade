"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  Sun,
  Moon,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Upload,
  X,
  Shield,
  FileText,
  User,
  MapPin,
  CreditCard,
  Loader2,
  Check,
} from "lucide-react";
import { PulseLoader } from "react-spinners";
import { useDropzone } from "react-dropzone";
import { apiFetch } from "@/lib/api";
import { toast } from "sonner";

const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "your-cloud-name";
const CLOUDINARY_UPLOAD_PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "elite_preset";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const step1Schema = z.object({
  dob: z.string().min(1, "Date of birth is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .refine((phone) => {
      const digitsOnly = phone.replace(/[\s\+\-\(\)]/g, "");
      return digitsOnly.length >= 10;
    }, "Please enter a complete phone number"),
});

const step2Schema = z.object({
  address: z.string().min(5, "Address must be at least 5 characters"),
  postal_code: z.string().min(3, "Postal code is required"),
  city: z.string().min(2, "City is required"),
  region: z.string().min(2, "Region/State is required"),
});

const step3Schema = z.object({
  id_type: z.enum(["passport", "driver_license", "national_id", "voter_card"], {
    message: "Please select an ID type",
  }),
});

type Step1Data = z.infer<typeof step1Schema>;
type Step2Data = z.infer<typeof step2Schema>;
type Step3Data = z.infer<typeof step3Schema>;
type CompleteFormData = Step1Data & Step2Data & Step3Data;

export default function KYCVerificationPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uploadingFront, setUploadingFront] = useState(false);
  const [uploadingBack, setUploadingBack] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [idFrontUrl, setIdFrontUrl] = useState<string | null>(null);
  const [idBackUrl, setIdBackUrl] = useState<string | null>(null);
  const [idFrontPreview, setIdFrontPreview] = useState<string | null>(null);
  const [idBackPreview, setIdBackPreview] = useState<string | null>(null);
  const [countryCallingCode, setCountryCallingCode] = useState<string>("");

  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [formData, setFormData] = useState<Partial<CompleteFormData>>({});

  const step1Form = useForm<Step1Data>({ resolver: zodResolver(step1Schema) });
  const step2Form = useForm<Step2Data>({ resolver: zodResolver(step2Schema) });
  const step3Form = useForm<Step3Data>({ resolver: zodResolver(step3Schema) });

  useEffect(() => setMounted(true), []);

  const validateFile = (file: File): string | null => {
    if (file.size > MAX_FILE_SIZE) return `File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB`;
    if (!ALLOWED_FILE_TYPES.includes(file.type)) return "Only JPEG, PNG, and WebP images are allowed";
    return null;
  };

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    data.append("folder", "kyc_documents");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: data }
    );

    if (!response.ok) throw new Error("Failed to upload image to Cloudinary");
    const result = await response.json();
    return result.secure_url;
  };

  const onDropFront = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    const validationError = validateFile(file);
    if (validationError) { setMessage(validationError); toast.error(validationError); return; }

    setUploadingFront(true);
    setMessage(null);
    try {
      setIdFrontPreview(URL.createObjectURL(file));
      const url = await uploadToCloudinary(file);
      setIdFrontUrl(url);
      toast.success("Front ID uploaded successfully");
    } catch {
      toast.error("Failed to upload front ID");
      setIdFrontPreview(null);
      setIdFrontUrl(null);
    } finally {
      setUploadingFront(false);
    }
  }, []);

  const { getRootProps: getRootPropsFront, getInputProps: getInputPropsFront, isDragActive: isDragActiveFront } = useDropzone({
    onDrop: onDropFront,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".webp"] },
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
    disabled: uploadingFront,
  });

  const onDropBack = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    const validationError = validateFile(file);
    if (validationError) { setMessage(validationError); toast.error(validationError); return; }

    setUploadingBack(true);
    setMessage(null);
    try {
      setIdBackPreview(URL.createObjectURL(file));
      const url = await uploadToCloudinary(file);
      setIdBackUrl(url);
      toast.success("Back ID uploaded successfully");
    } catch {
      toast.error("Failed to upload back ID");
      setIdBackPreview(null);
      setIdBackUrl(null);
    } finally {
      setUploadingBack(false);
    }
  }, []);

  const { getRootProps: getRootPropsBack, getInputProps: getInputPropsBack, isDragActive: isDragActiveBack } = useDropzone({
    onDrop: onDropBack,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".webp"] },
    maxFiles: 1,
    maxSize: MAX_FILE_SIZE,
    disabled: uploadingBack,
  });

  const steps = [
    { title: "Personal Information", description: "Let's start with your basic details", icon: User },
    { title: "Address Details", description: "Where can we reach you?", icon: MapPin },
    { title: "Identity Verification", description: "Upload your identification documents", icon: CreditCard },
  ];

  const handleStep1Submit = (data: Step1Data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(1);
  };

  const handleStep2Submit = (data: Step2Data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(2);
  };

  const handleFinalSubmit = async (data: Step3Data) => {
    if (!idFrontUrl || !idBackUrl) {
      toast.error("Please upload both front and back of your ID");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const completeData: CompleteFormData = {
        ...(formData as Omit<CompleteFormData, "id_type">),
        ...data,
      };

      if (!completeData.dob || !completeData.phone || !completeData.address || !completeData.postal_code || !completeData.city || !completeData.region) {
        toast.error("Please complete all previous steps");
        return;
      }

      const payload = {
        dob: completeData.dob,
        phone: completeData.phone,
        address: completeData.address,
        postal_code: completeData.postal_code,
        city: completeData.city,
        region: completeData.region,
        id_type: completeData.id_type,
        id_front_url: idFrontUrl,
        id_back_url: idBackUrl,
      };

      const res = await apiFetch("/submit-kyc/", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        const errorMessage = result?.error || result?.detail || `KYC submission failed (${res.status})`;
        throw new Error(errorMessage);
      }

      toast.success("KYC submitted successfully! Redirecting...");
      setTimeout(() => router.push("/portfolio"), 2000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to submit KYC. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await apiFetch("/profile/");
        if (res.ok) {
          const raw = await res.json();
          const data = raw.user || raw;
          // If KYC already submitted, redirect to portfolio
          if (data.has_submitted_kyc) {
            router.push("/portfolio");
            return;
          }
          const code = data.country_calling_code || localStorage.getItem("country_calling_code") || "";
          setCountryCallingCode(code);
          if (code && !step1Form.getValues("phone")) {
            step1Form.setValue("phone", code);
          }
        }
      } catch {
        const code = localStorage.getItem("country_calling_code") || "";
        setCountryCallingCode(code);
        if (code) step1Form.setValue("phone", code);
      }
    };
    if (mounted) fetchProfile();
  }, [mounted, step1Form, router]);

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-[#0a1628] dark:via-[#0d1b2a] dark:to-[#1b263b] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center justify-between mb-6">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-600/50 hover:bg-gray-100 dark:hover:bg-[#1e2d3d]/50 transition-all"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-blue-500" />
                ) : (
                  <Sun className="w-5 h-5 text-blue-400" />
                )}
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">KYC Verification</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Secure your account and unlock all features
              </p>
            </div>
          </div>

          {/* Info Notices */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
            <div className="flex gap-3">
              <FileText className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-1 text-sm">Why we need this information</h3>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  KYC verification helps us comply with regulations, prevent fraud, and ensure the security of your account.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 mb-8">
            <div className="flex gap-3">
              <Upload className="w-5 h-5 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-1 text-sm">Upload Requirements</h3>
                <p className="text-xs text-indigo-700 dark:text-indigo-300">
                  Maximum file size: 10MB per image. Accepted formats: JPEG, PNG, WebP
                </p>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index <= currentStep
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500"
                  }`}>
                    {index < currentStep ? <CheckCircle className="w-6 h-6" /> : <span className="font-semibold">{index + 1}</span>}
                  </div>
                  <p className="text-xs mt-2 text-center hidden sm:block text-gray-600 dark:text-gray-400">{step.title}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 flex-1 transition-all duration-300 ${
                    index < currentStep ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 dark:bg-[#1e2d3d]/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <CurrentIcon className="w-6 h-6 text-blue-500" />
              <div>
                <h2 className="text-xl font-semibold">{steps[currentStep].title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{steps[currentStep].description}</p>
              </div>
            </div>

            {/* Step 1: Personal Info */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Date of Birth</label>
                  <input
                    type="date"
                    {...step1Form.register("dob")}
                    className="w-full border rounded-lg px-4 py-3 bg-white dark:bg-[#1e2d3d]/80 border-gray-300 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {step1Form.formState.errors.dob && <p className="text-red-500 text-sm mt-1">{step1Form.formState.errors.dob.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    {...step1Form.register("phone")}
                    placeholder={countryCallingCode ? `${countryCallingCode} 234 567 8900` : "+1 234 567 8900"}
                    className="w-full border rounded-lg px-4 py-3 bg-white dark:bg-[#1e2d3d]/80 border-gray-300 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {step1Form.formState.errors.phone && <p className="text-red-500 text-sm mt-1">{step1Form.formState.errors.phone.message}</p>}
                  {countryCallingCode && <p className="text-xs text-gray-500 mt-1">Country code {countryCallingCode} detected</p>}
                </div>
                <button
                  onClick={step1Form.handleSubmit(handleStep1Submit)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Step 2: Address */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Street Address</label>
                  <input type="text" {...step2Form.register("address")} placeholder="123 Main Street"
                    className="w-full border rounded-lg px-4 py-3 bg-white dark:bg-[#1e2d3d]/80 border-gray-300 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  {step2Form.formState.errors.address && <p className="text-red-500 text-sm mt-1">{step2Form.formState.errors.address.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input type="text" {...step2Form.register("city")} placeholder="New York"
                      className="w-full border rounded-lg px-4 py-3 bg-white dark:bg-[#1e2d3d]/80 border-gray-300 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {step2Form.formState.errors.city && <p className="text-red-500 text-sm mt-1">{step2Form.formState.errors.city.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Region/State</label>
                    <input type="text" {...step2Form.register("region")} placeholder="NY"
                      className="w-full border rounded-lg px-4 py-3 bg-white dark:bg-[#1e2d3d]/80 border-gray-300 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {step2Form.formState.errors.region && <p className="text-red-500 text-sm mt-1">{step2Form.formState.errors.region.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Postal Code</label>
                  <input type="text" {...step2Form.register("postal_code")} placeholder="10001"
                    className="w-full border rounded-lg px-4 py-3 bg-white dark:bg-[#1e2d3d]/80 border-gray-300 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  {step2Form.formState.errors.postal_code && <p className="text-red-500 text-sm mt-1">{step2Form.formState.errors.postal_code.message}</p>}
                </div>
                <div className="flex gap-4">
                  <button onClick={goBack}
                    className="flex-1 bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button onClick={step2Form.handleSubmit(handleStep2Submit)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    Continue <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: ID Upload */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">ID Document Type</label>
                  <select
                    {...step3Form.register("id_type")}
                    className="w-full border rounded-lg px-4 py-3 bg-white dark:bg-[#1e2d3d]/80 border-gray-300 dark:border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select ID Type</option>
                    <option value="passport">Passport</option>
                    <option value="driver_license">Driver&apos;s License</option>
                    <option value="national_id">National ID</option>
                    <option value="voter_card">Voter&apos;s Card</option>
                  </select>
                  {step3Form.formState.errors.id_type && <p className="text-red-500 text-sm mt-1">{step3Form.formState.errors.id_type.message}</p>}
                </div>

                {/* ID Front */}
                <div>
                  <label className="block text-sm font-medium mb-2">ID Front Side</label>
                  {!idFrontPreview ? (
                    <div
                      {...getRootPropsFront()}
                      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                        isDragActiveFront ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : uploadingFront ? "border-gray-400 bg-gray-100/50 dark:bg-gray-800/50 cursor-not-allowed"
                          : "border-gray-300 dark:border-gray-600/50 hover:border-blue-400"
                      }`}
                    >
                      <input {...getInputPropsFront()} />
                      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">Drag & drop or click to upload</p>
                      <p className="text-xs text-gray-400 mt-2">Max size: 10MB</p>
                    </div>
                  ) : (
                    <div className="relative w-full h-48 group rounded-lg overflow-hidden">
                      <Image src={idFrontPreview} alt="ID Front" fill className="object-cover" />
                      {uploadingFront && (
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                          <Loader2 className="w-10 h-10 text-blue-400 animate-spin mb-3" />
                          <p className="text-white font-medium text-sm">Uploading image...</p>
                        </div>
                      )}
                      {!uploadingFront && (
                        <button onClick={() => { setIdFrontUrl(null); setIdFrontPreview(null); }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                          <X className="w-4 h-4" />
                        </button>
                      )}
                      {idFrontUrl && !uploadingFront && (
                        <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1.5 z-20">
                          <Check className="w-3 h-3" /> Uploaded
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* ID Back */}
                <div>
                  <label className="block text-sm font-medium mb-2">ID Back Side</label>
                  {!idBackPreview ? (
                    <div
                      {...getRootPropsBack()}
                      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                        isDragActiveBack ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : uploadingBack ? "border-gray-400 bg-gray-100/50 dark:bg-gray-800/50 cursor-not-allowed"
                          : "border-gray-300 dark:border-gray-600/50 hover:border-blue-400"
                      }`}
                    >
                      <input {...getInputPropsBack()} />
                      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-sm text-gray-500 dark:text-gray-400">Drag & drop or click to upload</p>
                      <p className="text-xs text-gray-400 mt-2">Max size: 10MB</p>
                    </div>
                  ) : (
                    <div className="relative w-full h-48 group rounded-lg overflow-hidden">
                      <Image src={idBackPreview} alt="ID Back" fill className="object-cover" />
                      {uploadingBack && (
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                          <Loader2 className="w-10 h-10 text-blue-400 animate-spin mb-3" />
                          <p className="text-white font-medium text-sm">Uploading image...</p>
                        </div>
                      )}
                      {!uploadingBack && (
                        <button onClick={() => { setIdBackUrl(null); setIdBackPreview(null); }}
                          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                          <X className="w-4 h-4" />
                        </button>
                      )}
                      {idBackUrl && !uploadingBack && (
                        <div className="absolute bottom-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1.5 z-20">
                          <Check className="w-3 h-3" /> Uploaded
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <button onClick={goBack}
                    className="flex-1 bg-gray-100 dark:bg-gray-700/50 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                    <ArrowLeft className="w-5 h-5" /> Back
                  </button>
                  <button
                    onClick={step3Form.handleSubmit(handleFinalSubmit)}
                    disabled={loading || uploadingFront || uploadingBack}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
                    ) : (
                      <>Submit KYC <CheckCircle className="w-5 h-5" /></>
                    )}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
