import { useState, useEffect, useRef } from "react";

const WOMEN_LEADERS = [
  {
    name: "Marie Curie", nameTa: "மேரி கியூரி",
    title: "Pioneering Scientist & Nobel Laureate", titleTa: "முன்னோடி விஞ்ஞானி & நோபல் பரிசு பெற்றவர்",
    quote: "Nothing in life is to be feared, only to be understood.",
    quoteTa: "வாழ்வில் எதற்கும் பயப்படத் தேவையில்லை, புரிந்துகொள்ள வேண்டியதே உள்ளது.",
    emoji: "⚗️", color: "#FF6B9D", image: "/leaders/marie_curie.png"
  },
  {
    name: "Malala Yousafzai", nameTa: "மலாலா யூசுப்சாய்",
    title: "Education Activist & Nobel Peace Prize Winner", titleTa: "கல்வி ஆர்வலர் & நோபல் அமைதி பரிசு பெற்றவர்",
    quote: "One child, one teacher, one book, one pen can change the world.",
    quoteTa: "ஒரு குழந்தை, ஒரு ஆசிரியர், ஒரு புத்தகம், ஒரு பேனா உலகை மாற்றலாம்.",
    emoji: "📚", color: "#FFD700", image: "/leaders/malala.png"
  },
  {
    name: "Rosa Parks", nameTa: "ரோசா பார்க்ஸ்",
    title: "Civil Rights Icon & Mother of the Movement", titleTa: "சிவில் உரிமை சின்னம் & இயக்கத்தின் தாய்",
    quote: "You must never be fearful about what you are doing when it is right.",
    quoteTa: "நீ சரியான செயல் செய்யும்போது ஒருபோதும் பயப்படாதே.",
    emoji: "✊", color: "#9B59B6", image: "/leaders/rosa.png"
  },
  {
    name: "Amelia Earhart", nameTa: "அமேலியா ஏர்ஹார்ட்",
    title: "Aviation Pioneer & Record-Breaking Aviator", titleTa: "விமான முன்னோடி & சாதனை படைத்த விமானி",
    quote: "The most difficult thing is the decision to act. The rest is merely tenacity.",
    quoteTa: "மிகவும் கடினமான விஷயம் செயல்படும் முடிவை எடுப்பதே. மற்றதெல்லாம் விடாமுயற்சி மட்டுமே.",
    emoji: "✈️", color: "#00BCD4", image: "/leaders/amelia.png"
  },
  {
    name: "Frida Kahlo", nameTa: "ஃப்ரிடா காலோ",
    title: "Iconic Artist & Symbol of Resilience", titleTa: "புகழ்பெற்ற கலைஞர் & மனவுறுதியின் சின்னம்",
    quote: "I never painted dreams. I painted my own reality.",
    quoteTa: "நான் கனவுகளை வரையவில்லை. என் சொந்த யதார்த்தத்தை வரைந்தேன்.",
    emoji: "🎨", color: "#FF5722", image: "/leaders/frida.png"
  },
  {
    name: "Indira Gandhi", nameTa: "இந்திரா காந்தி",
    title: "India's First Female Prime Minister", titleTa: "இந்தியாவின் முதல் பெண் பிரதமர்",
    quote: "You cannot shake hands with a clenched fist.",
    quoteTa: "மூடிய கைகளால் யாரோடும் கைகுலுக்க முடியாது.",
    emoji: "🕊️", color: "#4CAF50", image: "/leaders/indira.png"
  },
  {
    name: "Kalpana Chawla", nameTa: "கல்பனா சாவ்லா",
    title: "NASA Astronaut & Space Pioneer", titleTa: "நாசா விண்வெளி வீராங்கனை",
    quote: "The path from dreams to success does exist.",
    quoteTa: "கனவிலிருந்து வெற்றிக்கான பாதை நிச்சயம் உண்டு.",
    emoji: "🚀", color: "#E91E63", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Kalpana_Chawla%2C_NASA_astronaut%2C_official_portrait.jpg/300px-Kalpana_Chawla%2C_NASA_astronaut%2C_official_portrait.jpg"
  },
  {
    name: "Mother Teresa", nameTa: "அன்னை தெரேசா",
    title: "Saint of the Gutters & Nobel Peace Laureate", titleTa: "ஏழைகளின் தாய் & நோபல் அமைதி பரிசு பெற்றவர்",
    quote: "If you judge people, you have no time to love them.",
    quoteTa: "மனிதர்களை தீர்ப்பிட்டால், அவர்களை நேசிக்க நேரம் இருக்காது.",
    emoji: "💝", color: "#03A9F4", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/400px-Mother_Teresa_1.jpg"
  },
  {
    name: "Velu Nachiyar", nameTa: "வேலு நாச்சியார்",
    title: "Queen of Sivaganga & Revolutionary Warrior", titleTa: "சிவகங்கை ராணி & புரட்சிகர வீராங்கனை",
    quote: "The flame of freedom can never be extinguished.",
    quoteTa: "சுதந்திரத்தின் தீப்பிழம்பை ஒருபோதும் அணைக்க முடியாது.",
    emoji: "⚔️", color: "#FF9933", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Velunachiar_repro_1.jpg"
  },
  {
    name: "Avvaiyar", nameTa: "அவ்வையார்",
    title: "Legendary Tamil Poet & Philosopher", titleTa: "புகழ்பெற்ற தமிழ் கவிஞர் & தத்துவஞானி",
    quote: "What we know is a handful of sand; what we don't know is the size of the world.",
    quoteTa: "கற்றது கைம்மண் அளவு, கல்லாதது உலகளவு.",
    emoji: "📜", color: "#FFD700", image: "https://www.mkgandhi.org/resources/images/avvaiyar.jpg"
  },
  {
    name: "Muthulakshmi Reddy", nameTa: "முத்துலட்சுமி ரெட்டி",
    title: "India's First Female Surgeon & Legislator", titleTa: "இந்தியாவின் முதல் பெண் மருத்துவர் & சட்டமன்ற உறுப்பினர்",
    quote: "Service to humanity is the highest form of worship.",
    quoteTa: "மனிதநேய சேவையே வழிபாட்டின் உயர்ந்த வடிவம்.",
    emoji: "🩺", color: "#4CAF50", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Muthulakshmi_Reddy.jpg/330px-Muthulakshmi_Reddy.jpg"
  },
  {
    name: "M. S. Subbulakshmi", nameTa: "எம். எஸ். சுப்புலட்சுமி",
    title: "Bharat Ratna & Nightingale of Carnatic Music", titleTa: "பாரத ரத்னா & கர்நாடக இசையின் குயில்",
    quote: "Music is a path to the divine.",
    quoteTa: "இசை இறைவனை அடையும் ஒரு வழி.",
    emoji: "🎶", color: "#9B59B6", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/M.S._Subbulakshmi_1965.jpg/400px-M.S._Subbulakshmi_1965.jpg"
  },
];

const MOTIVATIONAL_QUOTES = {
  en: [
    { text: "A woman is like a tea bag — you never know how strong she is until she's in hot water.", author: "Eleanor Roosevelt" },
    { text: "The most courageous act is still to think for yourself. Aloud.", author: "Coco Chanel" },
    { text: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott" },
    { text: "Well-behaved women seldom make history.", author: "Laurel Thatcher Ulrich" },
    { text: "You are more powerful than you know; you are beautiful just as you are.", author: "Melissa Etheridge" },
    { text: "A woman with a voice is, by definition, a strong woman.", author: "Melinda Gates" },
    { text: "There is no limit to what we, as women, can accomplish.", author: "Michelle Obama" },
    { text: "Do not live someone else's life and someone else's idea of what womanhood is.", author: "Viola Davis" },
  ],
  ta: [
    { text: "பெண் ஒரு தேயிலை பை போன்றவள் — சூடான நீரில் போடும்வரை அவளின் வலிமை தெரியாது.", author: "எலினார் ரூஸ்வெல்ட்" },
    { text: "மிகவும் தைரியமான செயல் இன்னும் உன்னால் சிந்திக்க முடிவது. உரக்க.", author: "கோகோ சேனல்" },
    { text: "புயல்களுக்கு நான் பயப்படவில்லை, ஏனெனில் என் கப்பலை ஓட்டக் கற்றுக்கொள்கிறேன்.", author: "லூயிசா மே ஆல்காட்" },
    { text: "நல்ல பெண்கள் வரலாறு படைப்பதில்லை.", author: "லாரல் தாட்சர் உல்ரிக்" },
    { text: "நீ நினைப்பதை விட சக்தி வாய்ந்தவள்; நீ இருக்கும் படியே அழகானவள்.", author: "மெலிசா எத்ரிட்ஜ்" },
    { text: "குரல் கொண்ட பெண் வலிமையான பெண்ணே.", author: "மெலிண்டா கேட்ஸ்" },
    { text: "நாம் பெண்களாக என்ன சாதிக்க முடியும் என்பதற்கு எல்லை இல்லை.", author: "மிஷேல் ஒபாமா" },
    { text: "வேறொருவரின் வாழ்க்கையை வாழாதே, பெண்மை என்னவென்று வேறொருவர் சொல்வதை ஏற்காதே.", author: "விய்யோலா டேவிஸ்" },
  ],
};

const TRAITS = ["curious", "brave", "creative", "ambitious", "compassionate", "strong", "adventurous", "a leader"];
const TRAIT_MATCH = { curious: 0, brave: 2, creative: 4, ambitious: 6, compassionate: 7, strong: 2, adventurous: 3, "a leader": 5 };
const TRAIT_TA = { curious: "ஆர்வமுள்ளவள்", brave: "தைரியமானவள்", creative: "படைப்பாளி", ambitious: "லட்சியமிக்கவள்", compassionate: "கருணையுள்ளவள்", strong: "வலிமையானவள்", adventurous: "சாகசமிக்கவள்", "a leader": "தலைவி" };
const CONFETTI_COLORS = ["#FF6B9D", "#FFD700", "#9B59B6", "#00BCD4", "#FF5722", "#4CAF50", "#E91E63", "#FFF"];

const PERSONAL_MOTIVATIONS = {
  en: [
    "{name}, don't procrastinate! You're already doing amazing — keep it up!",
    "{name}, keep pushing forward! Greatness is waiting for you!",
    "{name}, you're stronger than you think — never stop believing!",
    "{name}, your potential is limitless! The sky is just the beginning!",
    "{name}, every step you take brings you closer to your dreams!",
    "Dear {name}, the world is a better place because you're in it!",
    "{name}, embrace your power — you were born to shine!",
    "{name}, your courage inspires everyone around you — keep going!",
  ],
  ta: [
    "{name}, தள்ளிப்போடாதே! நீ ஏற்கனவே அருமையாக செய்கிறாய் — தொடர்ந்து செய்!",
    "{name}, முன்னேறிச் செல்! மேன்மை உனக்காக காத்திருக்கிறது!",
    "{name}, நீ நினைப்பதை விட வலிமையானவள் — நம்பிக்கையை விடாதே!",
    "{name}, உன் திறன் எல்லையற்றது! வானமே தொடக்கம்!",
    "{name}, நீ எடுக்கும் ஒவ்வொரு அடியும் கனவை நெருங்குகிறது!",
    "அன்பான {name}, நீ இருப்பதால் உலகம் அழகாக இருக்கிறது!",
    "{name}, உன் சக்தியை ஏற்றுக்கொள் — நீ ஒளிர பிறந்தவள்!",
    "{name}, உன் தைரியம் அனைவரையும் ஊக்குவிக்கிறது — தொடர்!",
  ],
};

function ConfettiPiece({ style }) {
  return <div style={{ position: "fixed", pointerEvents: "none", animation: "confettiFall 4s ease-in forwards", ...style }} />;
}
function Particle({ style }) {
  return <div style={{ position: "absolute", borderRadius: "50%", pointerEvents: "none", animation: "floatUp 3s ease-out forwards", ...style }} />;
}

export default function WomensDayApp() {
  const [page, setPage] = useState("form");
  const [lang, setLang] = useState("en");
  const [formData, setFormData] = useState({ name: "", birthMonth: "", birthDay: "", dream: "", strength: "" });
  const [errors, setErrors] = useState({});
  const [leader, setLeader] = useState(null);
  const [confetti, setConfetti] = useState([]);
  const [particles, setParticles] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [revealStep, setRevealStep] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [motivIdx, setMotivIdx] = useState(0);
  const [floatingEmojis] = useState(["🌸", "💜", "✨", "🌺", "💫", "🦋", "🌷", "⭐"]);
  const bannerRef = useRef(null);

  const T = (en, ta) => lang === "ta" ? ta : en;

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&family=Noto+Sans+Tamil:wght@400;700&display=swap');
      @keyframes floatUp { 0%{transform:translateY(0) scale(1);opacity:1} 100%{transform:translateY(-200px) scale(0);opacity:0} }
      @keyframes confettiFall { 0%{transform:translateY(-20px) rotate(0deg);opacity:1} 100%{transform:translateY(110vh) rotate(720deg);opacity:0} }
      @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
      @keyframes slideInUp { from{transform:translateY(40px);opacity:0} to{transform:translateY(0);opacity:1} }
      @keyframes fadeInScale { from{transform:scale(0.7);opacity:0} to{transform:scale(1);opacity:1} }
      @keyframes floatEmoji { 0%,100%{transform:translateY(0px) rotate(-5deg)} 50%{transform:translateY(-15px) rotate(5deg)} }
      @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      @keyframes glowPulse { 0%,100%{box-shadow:0 0 20px rgba(255,107,157,0.4)} 50%{box-shadow:0 0 60px rgba(255,107,157,0.9),0 0 100px rgba(255,107,157,0.3)} }
      @keyframes textGlow { 0%,100%{text-shadow:0 0 10px rgba(255,215,0,0.5)} 50%{text-shadow:0 0 30px rgba(255,215,0,1),0 0 60px rgba(255,107,157,0.5)} }
      @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes quoteSlide { from{transform:translateX(20px);opacity:0} to{transform:translateX(0);opacity:1} }
      @keyframes borderRotate { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      @keyframes sparkle { 0%,100%{opacity:0.3;transform:scale(0.8)} 50%{opacity:1;transform:scale(1.2)} }
      @keyframes heartFloat { 0%{transform:translate(-50%,-50%) scale(1) rotate(-5deg)} 25%{transform:translate(-50%,-48%) scale(1.08) rotate(0deg)} 50%{transform:translate(-50%,-50%) scale(1.15) rotate(5deg)} 75%{transform:translate(-50%,-52%) scale(1.08) rotate(0deg)} 100%{transform:translate(-50%,-50%) scale(1) rotate(-5deg)} }
      .form-input {
        background:rgba(255,255,255,0.07); border:1.5px solid rgba(255,255,255,0.15);
        color:white; border-radius:14px; padding:14px 18px; width:100%;
        font-family:'DM Sans','Noto Sans Tamil',sans-serif; font-size:15px;
        transition:all 0.3s ease; outline:none; box-sizing:border-box;
      }
      .form-input:focus { border-color:#FF6B9D; background:rgba(255,107,157,0.1); box-shadow:0 0 0 4px rgba(255,107,157,0.15); }
      .form-input::placeholder { color:rgba(255,255,255,0.35); }
      .form-input option { background:#1a0a2e; color:white; }
      .generate-btn {
        background:linear-gradient(135deg,#FF6B9D,#C23EE8,#FF6B9D); background-size:200% auto;
        border:none; color:white; padding:16px 40px; border-radius:50px;
        font-family:'DM Sans','Noto Sans Tamil',sans-serif; font-size:16px; font-weight:600;
        cursor:pointer; transition:all 0.3s ease; letter-spacing:0.5px; width:100%;
      }
      .generate-btn:hover { background-position:right center; transform:translateY(-2px); box-shadow:0 10px 40px rgba(255,107,157,0.5); }
      .generate-btn:disabled { opacity:0.7; cursor:not-allowed; transform:none; }
      .lang-btn {
        border:1.5px solid rgba(255,255,255,0.2); color:white; padding:7px 16px; border-radius:50px;
        font-family:'DM Sans','Noto Sans Tamil',sans-serif; font-size:13px; font-weight:600;
        cursor:pointer; transition:all 0.25s; background:rgba(255,255,255,0.06);
      }
      .lang-btn.active { background:linear-gradient(135deg,#FF6B9D,#C23EE8); border-color:transparent; box-shadow:0 4px 20px rgba(255,107,157,0.4); }
      .lang-btn:hover:not(.active) { background:rgba(255,255,255,0.12); transform:translateY(-1px); }
      .qnav-btn {
        background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15);
        color:white; width:34px; height:34px; border-radius:50%; cursor:pointer;
        display:flex; align-items:center; justify-content:center; font-size:16px;
        transition:all 0.2s; flex-shrink:0; font-weight:700;
      }
      .qnav-btn:hover { background:rgba(255,107,157,0.3); border-color:#FF6B9D; transform:scale(1.1); }
      .close-btn {
        background:rgba(255,255,255,0.07); border:1.5px solid rgba(255,255,255,0.18);
        color:white; padding:13px 32px; border-radius:50px;
        font-family:'DM Sans','Noto Sans Tamil',sans-serif; font-size:15px;
        cursor:pointer; transition:all 0.3s; width:100%;
      }
      .close-btn:hover { background:rgba(255,107,157,0.18); border-color:#FF6B9D; transform:translateY(-2px); }
      .error-text { color:#FF6B9D; font-size:12px; margin-top:4px; font-family:'DM Sans',sans-serif; }
      ::-webkit-scrollbar { width:4px; }
      ::-webkit-scrollbar-thumb { background:rgba(255,107,157,0.4); border-radius:2px; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const matchLeader = (data) => {
    const nameLen = data.name.length;
    const birthMonth = data.birthMonth ? parseInt(data.birthMonth) : 6;
    const idx = ((nameLen + birthMonth) + (data.strength ? TRAIT_MATCH[data.strength] || 0 : 0)) % WOMEN_LEADERS.length;
    return WOMEN_LEADERS[idx];
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = T("Please enter your name 💕", "உங்கள் பெயரை உள்ளிடவும் 💕");
    if (!formData.birthMonth) e.birthMonth = T("Your birth month is needed ✨", "பிறந்த மாதம் தேவை ✨");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const spawnParticles = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newP = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      left: rect.left + rect.width / 2 + (Math.random() - 0.5) * 100,
      top: rect.top + rect.height / 2 + (Math.random() - 0.5) * 60,
      size: 6 + Math.random() * 10,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    }));
    setParticles(prev => [...prev, ...newP]);
    setTimeout(() => setParticles(prev => prev.filter(p => !newP.find(n => n.id === p.id))), 3000);
  };

  const launchConfetti = () => {
    const pieces = Array.from({ length: 80 }, (_, i) => ({
      id: Date.now() + i, left: Math.random() * 100,
      size: 6 + Math.random() * 10, color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      delay: Math.random() * 2, duration: 3 + Math.random() * 2, shape: Math.random() > 0.5 ? "50%" : "0%",
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 6000);
  };

  const handleGenerate = (e) => {
    spawnParticles(e);
    if (!validate()) return;
    setIsGenerating(true);
    const matched = matchLeader(formData);
    setLeader(matched);
    setQuoteIdx(Math.floor(Math.random() * MOTIVATIONAL_QUOTES.en.length));
    setMotivIdx(Math.floor(Math.random() * PERSONAL_MOTIVATIONS.en.length));
    setTimeout(() => {
      setIsGenerating(false);
      setPage("banner");
      setRevealStep(0);
      launchConfetti();
      [1, 2, 3, 4].forEach((step, i) => setTimeout(() => setRevealStep(step), 300 + i * 600));
    }, 1800);
  };

  const handleClose = () => {
    setPage("form");
    setFormData({ name: "", birthMonth: "", birthDay: "", dream: "", strength: "" });
    setErrors({});
    setRevealStep(0);
    setLeader(null);
  };



  const quotes = MOTIVATIONAL_QUOTES[lang];
  const prevQuote = () => setQuoteIdx(i => (i - 1 + quotes.length) % quotes.length);
  const nextQuote = () => setQuoteIdx(i => (i + 1) % quotes.length);

  const sf = (step, delay = "0s") => ({
    opacity: revealStep >= step ? 1 : 0,
    transform: revealStep >= step ? "translateY(0)" : "translateY(22px)",
    transition: `all 0.7s ease ${delay}`,
  });

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#0d0020 0%,#1a0535 30%,#0a0a2e 60%,#1a0535 100%)", backgroundSize: "400% 400%", animation: "gradientShift 8s ease infinite", fontFamily: "'DM Sans','Noto Sans Tamil',sans-serif", position: "relative", overflow: "hidden" }}>

      {/* Ambient orbs */}
      <div style={{ position: "fixed", top: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,107,157,0.15) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "-20%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle,rgba(194,62,232,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />

      {/* Floating emojis */}
      {floatingEmojis.map((emoji, i) => (
        <div key={i} style={{ position: "fixed", left: `${10 + i * 11}%`, top: `${15 + (i % 3) * 25}%`, fontSize: `${14 + (i % 3) * 6}px`, opacity: 0.1, animation: `floatEmoji ${3 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`, pointerEvents: "none", zIndex: 0 }}>{emoji}</div>
      ))}

      {confetti.map(p => <ConfettiPiece key={p.id} style={{ left: `${p.left}%`, top: "-20px", width: p.size, height: p.size, background: p.color, borderRadius: p.shape, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`, zIndex: 1000 }} />)}
      {particles.map(p => <Particle key={p.id} style={{ left: p.left, top: p.top, width: p.size, height: p.size, background: p.color, zIndex: 999 }} />)}

      {/* Language Toggle */}
      <div style={{ position: "fixed", top: "16px", right: "16px", zIndex: 200, display: "flex", gap: "8px" }}>
        <button className={`lang-btn${lang === "en" ? " active" : ""}`} onClick={() => setLang("en")}>EN</button>
        <button className={`lang-btn${lang === "ta" ? " active" : ""}`} onClick={() => setLang("ta")}>தமிழ்</button>
      </div>

      {/* ─── FORM PAGE ─── */}
      {page === "form" && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "30px 20px", position: "relative", zIndex: 10 }}>

          <div style={{ textAlign: "center", marginBottom: "32px", animation: "slideInUp 0.8s ease" }}>
            <div style={{ fontSize: "44px", marginBottom: "8px", animation: "bounce 2s ease infinite" }}>🌸</div>
            <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#FF6B9D", fontWeight: 600, marginBottom: "10px" }}>
              {T("Happy Women's Day 2026", "சர்வதேச மகளிர் தினம் 2026")}
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,5vw,46px)", fontWeight: 900, background: "linear-gradient(135deg,#FFD700,#FF6B9D,#C23EE8,#FF6B9D)", backgroundSize: "300% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "shimmer 4s linear infinite", margin: "0 0 10px", lineHeight: 1.2 }}>
              {T("Discover Your Inner Power", "உன் உள்ளே இருக்கும் சக்தியை கண்டுபிடி")}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", margin: 0 }}>
              {T("Find the legendary woman who mirrors your spirit ✨", "உன் ஆவியை பிரதிபலிக்கும் புகழ்மிக்க பெண்ணை கண்டுபிடி ✨")}
            </p>
          </div>

          <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "34px 30px", width: "100%", maxWidth: "420px", boxShadow: "0 30px 80px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.08)", animation: "slideInUp 0.9s ease 0.1s both" }}>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", display: "block", marginBottom: "8px", fontWeight: 500 }}>{T("Your Name ✨", "உங்கள் பெயர் ✨")}</label>
              <input className="form-input" type="text" placeholder={T("Enter your beautiful name...", "உங்கள் அழகான பெயரை உள்ளிடவும்...")} value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
              {errors.name && <div className="error-text">{errors.name}</div>}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", display: "block", marginBottom: "8px", fontWeight: 500 }}>{T("Birthday 🎂", "பிறந்த நாள் 🎂")}</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <select className="form-input" value={formData.birthMonth} onChange={e => setFormData(p => ({ ...p, birthMonth: e.target.value }))} style={{ flex: 1.5 }}>
                  <option value="">{T("Month", "மாதம்")}</option>
                  {[T("January", "ஜனவரி"), T("February", "பிப்ரவரி"), T("March", "மார்ச்"), T("April", "ஏப்ரல்"), T("May", "மே"), T("June", "ஜூன்"), T("July", "ஜூலை"), T("August", "ஆகஸ்ட்"), T("September", "செப்டம்பர்"), T("October", "அக்டோபர்"), T("November", "நவம்பர்"), T("December", "டிசம்பர்")].map((m, i) => <option key={i + 1} value={i + 1}>{m}</option>)}
                </select>
                <select className="form-input" value={formData.birthDay} onChange={e => setFormData(p => ({ ...p, birthDay: e.target.value }))} style={{ flex: 1 }}>
                  <option value="">{T("Day", "நாள்")}</option>
                  {Array.from({ length: 31 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                </select>
              </div>
              {errors.birthMonth && <div className="error-text">{errors.birthMonth}</div>}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", display: "block", marginBottom: "8px", fontWeight: 500 }}>{T("Your Greatest Strength 💪", "உங்கள் மிகப்பெரிய பலம் 💪")}</label>
              <select className="form-input" value={formData.strength} onChange={e => setFormData(p => ({ ...p, strength: e.target.value }))}>
                <option value="">{T("Choose your superpower...", "உங்கள் சூப்பர் பவரை தேர்ந்தெடுங்கள்...")}</option>
                {TRAITS.map(t => <option key={t} value={t}>{T(`I am ${t}`, `நான் ${TRAIT_TA[t]}`)}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: "28px" }}>
              <label style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", display: "block", marginBottom: "8px", fontWeight: 500 }}>
                {T("Your Dream 🌟", "உங்கள் கனவு 🌟")} <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400, fontSize: "12px" }}>{T("(optional)", "(விருப்பத்திற்கு)")}</span>
              </label>
              <input className="form-input" type="text" placeholder={T("What do you want to achieve?", "நீங்கள் என்ன சாதிக்க விரும்புகிறீர்கள்?")} value={formData.dream} onChange={e => setFormData(p => ({ ...p, dream: e.target.value }))} />
            </div>

            <button className="generate-btn" onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? (
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                  <span style={{ display: "inline-block", width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.3)", borderTop: "2px solid white", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                  {T("Discovering your match...", "உங்கள் ஆன்மா நண்பரை கண்டுபிடிக்கிறோம்...")}
                </span>
              ) : T("✨ Generate My Power Banner", "✨ என் சக்தி பேனர் உருவாக்கு")}
            </button>
          </div>

          <p style={{ color: "rgba(255,255,255,0.18)", fontSize: "12px", marginTop: "22px", textAlign: "center" }}>
            🎓 {T("Celebrating Women's Day with JET Institute 💜 - Developed by NIHAL", "JET நிறுவனத்தின் மகளிர் தின கொண்டாட்டம் 💜 - Developed by NIHAL")}
          </p>
        </div>
      )}

      {/* ─── BANNER PAGE ─── */}
      {page === "banner" && leader && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "80px 20px 40px", position: "relative", zIndex: 10 }}>
          <div ref={bannerRef} style={{ width: "100%", maxWidth: "520px", animation: revealStep >= 1 ? "fadeInScale 0.7s ease" : "none", opacity: revealStep >= 1 ? 1 : 0 }}>

            {/* Badge */}
            <div style={{ textAlign: "center", marginBottom: "18px", ...sf(1) }}>
              <span style={{ display: "inline-block", background: "linear-gradient(90deg,#FF6B9D,#C23EE8)", padding: "6px 20px", borderRadius: "50px", fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "white" }}>
                🌸 {T("Women's Day 2026", "மகளிர் தினம் 2026")}
              </span>
            </div>

            {/* Card */}
            <div style={{ background: "linear-gradient(145deg,rgba(30,10,60,0.97),rgba(10,5,30,0.99))", border: "1px solid rgba(255,107,157,0.3)", borderRadius: "28px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.6)", animation: "glowPulse 3s ease infinite" }}>
              <div style={{ background: `linear-gradient(90deg,${leader.color},${leader.color}88,transparent)`, height: "4px" }} />

              <div style={{ padding: "28px" }}>

                {/* Title */}
                <div style={{ textAlign: "center", marginBottom: "22px", ...sf(2) }}>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,4vw,30px)", fontWeight: 900, background: `linear-gradient(135deg,#FFD700,${leader.color},#FFD700)`, backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", animation: "shimmer 3s linear infinite,textGlow 2s ease infinite", margin: "0 0 5px" }}>
                    {T("Happy Women's Day", "மகளிர் தின வாழ்த்துக்கள்")}
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
                    {T("Celebrating the power within", "உள்ளே இருக்கும் சக்தியை கொண்டாடுகிறோம்")}
                  </p>
                </div>

                {/* Name box */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 18px", background: `linear-gradient(135deg,rgba(255,107,157,0.1),rgba(194,62,232,0.1))`, borderRadius: "18px", border: `1px solid ${leader.color}30`, marginBottom: "18px", position: "relative", overflow: "hidden", ...sf(2, "0.3s") }}>
                  <div style={{ fontSize: "10px", color: "#FF6B9D", letterSpacing: "2.5px", marginBottom: "12px", textTransform: "uppercase", fontWeight: 600 }}>
                    🌸 {T("Women's Day Celebration For You", "உனக்கான மகளிர் தின கொண்டாட்டம்")}
                  </div>
                  {/* Neon heart behind name */}
                  <div style={{ position: "relative", width: "100%", textAlign: "center", marginBottom: "5px" }}>
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "clamp(80px,15vw,130px)", opacity: 0.07, animation: "heartFloat 4s ease-in-out infinite", filter: `drop-shadow(0 0 15px ${leader.color}) drop-shadow(0 0 30px #FF6B9D) drop-shadow(0 0 50px #C23EE8)`, pointerEvents: "none", zIndex: 0 }}>❤️</div>
                    <div style={{ position: "relative", zIndex: 1, fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,6vw,44px)", fontWeight: 900, color: "white", lineHeight: 1.2, textShadow: `0 0 30px ${leader.color}, 0 0 60px ${leader.color}50, 0 2px 4px rgba(0,0,0,0.5)`, padding: "10px 0" }}>
                      {formData.name}
                    </div>
                  </div>
                  {formData.strength && (
                    <div style={{ marginTop: "10px", background: `linear-gradient(90deg,${leader.color}30,${leader.color}15)`, border: `1px solid ${leader.color}50`, padding: "5px 16px", borderRadius: "50px", fontSize: "12px", color: leader.color, fontWeight: 600, boxShadow: `0 0 15px ${leader.color}20` }}>
                      ✨ {T(`${formData.strength.charAt(0).toUpperCase() + formData.strength.slice(1)} & Unstoppable`, `${TRAIT_TA[formData.strength]} & தடுக்க முடியாதவள்`)}
                    </div>
                  )}
                </div>

                {/* Leader */}
                <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "20px", background: "rgba(255,255,255,0.04)", borderRadius: "22px", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "18px", opacity: revealStep >= 3 ? 1 : 0, transform: revealStep >= 3 ? "translateX(0)" : "translateX(-30px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s", boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}>
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div style={{ width: "70px", height: "70px", borderRadius: "50%", padding: "3px", background: `linear-gradient(135deg, ${leader.color}, #C23EE8)`, boxShadow: `0 0 20px ${leader.color}50` }}>
                      <img
                        src={leader.image}
                        alt={leader.name}
                        style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", border: "2px solid #0d0020" }}
                      />
                    </div>
                    <div style={{ position: "absolute", bottom: "-2px", right: "-2px", width: "26px", height: "26px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", animation: "bounce 2s infinite" }}>
                      {leader.emoji}
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", color: "#FF6B9D", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px", fontWeight: 700 }}>
                      ✨ {T("Your spirit matches", "உன் ஆன்மா பொருந்துகிறது")}
                    </div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "20px", fontWeight: 900, color: "white", marginBottom: "3px", letterSpacing: "0.5px" }}>
                      {T(leader.name, leader.nameTa)}
                    </div>
                    <div style={{ fontSize: "12px", color: leader.color, fontWeight: 600 }}>
                      {T(leader.title, leader.titleTa)}
                    </div>
                  </div>
                </div>

                {/* Leader quote */}
                <div style={{ padding: "18px", background: `linear-gradient(135deg,${leader.color}12,transparent)`, borderLeft: `3px solid ${leader.color}`, borderRadius: "0 12px 12px 0", marginBottom: "18px", opacity: revealStep >= 3 ? 1 : 0, transform: revealStep >= 3 ? "translateX(0)" : "translateX(30px)", transition: "all 0.7s ease 0.4s" }}>
                  <div style={{ fontSize: "22px", color: leader.color, marginBottom: "6px" }}>"</div>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", lineHeight: 1.7, fontStyle: "italic", margin: "0 0 6px" }}>
                    {T(leader.quote, leader.quoteTa)}
                  </p>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>— {T(leader.name, leader.nameTa)}</div>
                </div>

                {/* ── PERSONALIZED MOTIVATION ── */}
                <div style={{ marginBottom: "18px", opacity: revealStep >= 3 ? 1 : 0, transform: revealStep >= 3 ? "scale(1)" : "scale(0.9)", transition: "all 0.7s ease 0.6s" }}>
                  {/* Animated border light wrapper */}
                  <div style={{ position: "relative", borderRadius: "22px", padding: "2px", background: "linear-gradient(90deg, #FF6B9D, #FFD700, #C23EE8, #00BCD4, #FF6B9D, #FFD700)", backgroundSize: "300% 100%", animation: "borderRotate 3s linear infinite" }}>
                    <div style={{ background: "linear-gradient(145deg, rgba(20,8,50,0.98), rgba(30,12,60,0.95))", borderRadius: "20px", padding: "24px 20px", position: "relative", overflow: "hidden" }}>
                      {/* Background glow effects */}
                      <div style={{ position: "absolute", top: "-30px", left: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,157,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
                      <div style={{ position: "absolute", bottom: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
                      {/* Corner sparkles */}
                      <div style={{ position: "absolute", top: "12px", left: "14px", fontSize: "14px", animation: "sparkle 2s ease-in-out infinite" }}>✨</div>
                      <div style={{ position: "absolute", top: "12px", right: "14px", fontSize: "14px", animation: "sparkle 2s ease-in-out 0.7s infinite" }}>🌟</div>
                      <div style={{ position: "absolute", bottom: "12px", left: "14px", fontSize: "12px", animation: "sparkle 2s ease-in-out 1.4s infinite" }}>💫</div>
                      <div style={{ position: "absolute", bottom: "12px", right: "14px", fontSize: "12px", animation: "sparkle 2s ease-in-out 0.3s infinite" }}>✨</div>
                      {/* Header */}
                      <div style={{ textAlign: "center", marginBottom: "14px", position: "relative", zIndex: 1 }}>
                        <span style={{ display: "inline-block", background: "linear-gradient(90deg, #FF6B9D, #FFD700)", padding: "5px 16px", borderRadius: "50px", fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "white", boxShadow: "0 4px 15px rgba(255,107,157,0.3)" }}>
                          🔥 {T("A Message For You", "உனக்கான செய்தி")}
                        </span>
                      </div>
                      {/* Message */}
                      <div style={{ textAlign: "center", animation: "quoteSlide 0.5s ease", position: "relative", zIndex: 1 }}>
                        <div style={{ fontSize: "28px", marginBottom: "8px", animation: "bounce 2s ease infinite" }}>💪</div>
                        <p style={{ color: "white", fontSize: "16px", lineHeight: 1.9, fontWeight: 600, margin: "0 0 6px", textShadow: "0 0 20px rgba(255,215,0,0.3)" }}>
                          {PERSONAL_MOTIVATIONS[lang][formData.name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % PERSONAL_MOTIVATIONS[lang].length].replace("{name}", formData.name)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>



                {/* Dream */}
                {formData.dream && (
                  <div style={{ textAlign: "center", padding: "13px", background: "rgba(194,62,232,0.06)", border: "1px solid rgba(194,62,232,0.2)", borderRadius: "14px", marginBottom: "14px", opacity: revealStep >= 4 ? 1 : 0, transition: "all 0.6s ease 0.5s" }}>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginBottom: "5px", letterSpacing: "1px", textTransform: "uppercase" }}>🌟 {T("Her Dream", "அவளின் கனவு")}</div>
                    <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>"{formData.dream}"</div>
                  </div>
                )}

                {/* Empowerment */}
                <div style={{ textAlign: "center", padding: "15px", background: "linear-gradient(135deg,rgba(255,107,157,0.1),rgba(194,62,232,0.1))", borderRadius: "14px", marginBottom: "18px", opacity: revealStep >= 4 ? 1 : 0, transition: "all 0.6s ease 0.7s" }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "15px", fontWeight: 700, background: "linear-gradient(90deg,#FF6B9D,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "5px" }}>
                    {T("She believed she could, so she did. 💫", "அவள் நம்பினாள், எனவே சாதித்தாள். 💫")}
                  </div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
                    {T("Every woman carries the power to change the world", "ஒவ்வொரு பெண்ணும் உலகை மாற்றும் சக்தி கொண்டவள்")}
                  </div>
                </div>

                {/* Emoji row */}
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px", fontSize: "22px", opacity: revealStep >= 4 ? 1 : 0, transition: "all 0.5s ease 0.9s" }}>
                  {["🌸", "💜", "✨", "🦋", "🌺", "⭐", "💫"].map((e, i) => (
                    <span key={i} style={{ animation: `floatEmoji ${2 + i * 0.2}s ease-in-out ${i * 0.15}s infinite` }}>{e}</span>
                  ))}
                </div>

                {/* Close */}
                <div style={{ opacity: revealStep >= 4 ? 1 : 0, transition: "all 0.5s ease 1.1s" }}>
                  <button className="close-btn" onClick={handleClose}>
                    ← {T("Try Another Name", "வேறு பெயர் முயற்சிக்கவும்")}
                  </button>
                </div>
              </div>

              <div style={{ background: `linear-gradient(90deg,transparent,${leader.color}88,transparent)`, height: "2px" }} />
            </div>

            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.18)", fontSize: "11px", marginTop: "18px" }}>
              {T("Made with 💜 for Women's Day Celebration · JET Institute 2026 · Developed by NIHAL", "மகளிர் தின கொண்டாட்டத்திற்காக 💜 · நிறுவனம் 2026 · நிஹால் உருவாக்கியது")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
