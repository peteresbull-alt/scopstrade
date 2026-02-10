export const WalletIcon = ({ type, className = "w-10 h-10" }: { type: string; className?: string }) => {
  const icons: Record<string, string> = {
    aktionariat: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/aktionariat_pbsgis.png",
    binance: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/binance_rdcvh9.png",
    bitcoin: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/bitcoin_dlhyem.png",
    bitkeep: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/bitkeep_qxflqv.png",
    bitpay: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/bitpay_qivztg.png",
    blockchain: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/blockchain_vzx2nt.png",
    coinbase: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/coinbase_swyxtr.png",
    "coinbase-one": "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/coinbase_swyxtr.png",
    crypto: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/crypto_vmqwsw.png",
    exodus: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/exodus_kwqzrn.png",
    gemini: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/gemini_m5oj8s.png",
    imtoken: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/imtoken_cjjfbq.png",
    infinito: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/infinito_rvgmzw.png",
    infinity: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/infinity_zljqc3.png",
    keyringpro: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447969/keyringpro_gd0vsh.png",
    metamask: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/metamask_j13bwx.png",
    ownbit: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/ownbit_z4iqh2.png",
    phantom: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/phantom_a6oozk.png",
    pulse: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/pulse_y1dcly.png",
    rainbow: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/rainbow_htqvix.png",
    robinhood: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/robinhood_pkk2jx.png",
    safepal: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/safepal_irmrnl.png",
    sparkpoint: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/sparkpoint_jt2xwt.png",
    trust: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/trust_m3p6al.png",
    uniswap: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/uniswap_fhzr9l.png",
    walletio: "https://res.cloudinary.com/dkii82r08/image/upload/v1736447970/walletio_mghbke.png",
  };

  const iconUrl = icons[type];

  if (!iconUrl) {
    // Fallback icon
    return (
      <div className={`${className} bg-blue-500/10 dark:bg-blue-500/20 rounded-full flex items-center justify-center`}>
        <svg className="w-1/2 h-1/2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={iconUrl}
      alt={type}
      className={`${className} object-contain rounded-full`}
    />
  );
};
