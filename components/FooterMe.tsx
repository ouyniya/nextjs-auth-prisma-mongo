const FooterMe = () => {
  return (
    <div className="w-full bg-rose-100 text-slate-600 z-55 text-center text-sm py-5">
      <div className="mx-auto max-w-7xl">
        <p>© nysdev.com 2024-2025; All rights reserved by Nysdev</p>
        <a
          href="/terms-and-privacy"
          className="text-rose-800/50 hover:text-rose-300
          duration-300
          "
        >
          Terms and Privacy Policy
        </a>
      </div>
    </div>
  );
};
export default FooterMe;
