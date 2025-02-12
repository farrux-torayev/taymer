

import { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const intervalRef = useRef(null);

 

  function qosh() {
    if (!intervalRef.current && inputValue !== "" && Number(inputValue) >= 0) {
      setCount(Number(inputValue)); 
      setInputValue("");
      intervalRef.current = setInterval(() => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
  }

  function toxtat() {
    clearInterval(intervalRef.current );
    intervalRef.current = null;
  }

  function nol() {
    toxtat(); 
    setCount(0);
  }

  return (
    <div className="flex m-auto flex-col w-[400px] items-center p-4 border rounded-lg shadow-lg ">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="mb-2 p-2 border rounded-lg"
      />
      <h1 className="text-2xl font-bold mb-2">{count} s</h1>
      <div className="flex gap-2">
        <button
          onClick={qosh}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Boshlash
        </button>
        <button
          onClick={toxtat}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
        >
          To'xtatish
        </button>
        <button
          onClick={nol}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Nolga qaytarish
        </button>
      </div>
    </div>
  );
};

export default App;


// React.js — bu JavaScript kutubxonasi bo'lib, u foydalanuvchi interfeyslarini yaratish uchun mo'ljallangan. Facebook tomonidan ishlab chiqilgan va ochiq manba kodida taqdim etilgan. React-ning asosiy maqsadi foydalanuvchilar uchun tezkor, samarali va modulli interfeyslarni ishlab chiqishni osonlashtirishdir. Quyida React haqida asosiy tushunchalarni ko'rib chiqamiz:

// React ning asosiy xususiyatlari
// Komponentga asoslangan arxitektura:

// React-da ilova kichik, qayta foydalaniladigan komponentlarga bo'linadi.
// Har bir komponent o'z funksionalligiga ega va interfeysning bir qismini aks ettiradi.
// Masalan: Header, Footer, Navbar kabi qismlar alohida komponentlar bo'lishi mumkin Virtual DOM:

// React Virtual DOM texnologiyasidan foydalanadi, bu haqiqiy DOM bilan ishlashdan ko'ra tezroq.
// Virtual DOM-da o'zgarishlar amalga oshiriladi va faqat kerakli joylar haqiqiy DOMga qo'llaniladi.
// Bu ishlash tezligini oshiradi.
// Deklarativ yondashuv:

// React deklarativ dasturlash uslubini qo'llaydi, ya'ni foydalanuvchi interfeysini qanday ko'rinishi kerakligini tasvirlaymiz.
// React o'zi kutilgan natijani amalga oshiradi.
// React Hooks:

// React 16.8 versiyasidan boshlab Hooks taqdim etilgan. Bu funksional komponentlarda holat (state) va sikl funksiyalarini ishlatish imkonini beradi.
// Server-Side Rendering (SSR):

// React ilovalari serverda ishlov berish imkoniyatiga ega (masalan, Next.js yordamida).
// Bu SEO uchun qulaylik yaratadi.
// Kengaytirilishi va kuchli ekotizim:

// React Redux, React Router kabi qo‘shimchalar bilan osongina kengaytiriladi.
// React’ning asosiy tushunchalari
// JSX (JavaScript XML):

// JSX — bu JavaScript va HTML’ni birlashtiruvchi maxsus sintaksis.
// Bu React komponentlarini osonroq va tushunarliroq yozishga yordam beradi.


// Ikkita turga bo'linadi:
// Funksional komponentlar: Oddiy JavaScript funksiyalari.
// Klass komponentlar: React.Component’dan meros oladi.

// // Funksional komponent
// function MyComponent() {
//     return <div>Bu mening komponentim</div>;
// }

// // Klass komponent
// class MyComponent extends React.Component {
//     render() {
//         return <div>Bu mening komponentim</div>;
//     }
// }

// State va Props:

// State: Komponentning ichki holatini boshqaradi.
// Props: Tashqaridan komponentga uzatiladigan ma'lumotlar (o‘zgarmas).
// jsx
// Копировать
// Редактировать
// const MyComponent = (props) => {
//     return <h1>Salom, {props.name}</h1>;
// };
// Holat boshqaruvi:

// Katta loyihalarda Redux, Context API, yoki boshqa boshqaruv vositalaridan foydalaniladi.
// React dan foydalanishning afzalliklari
// Tezkor va samarali ishlash.
// Kodni modullashtirish va qayta ishlatish oson.
// Katta hamjamiyat va boy resurslar.
// Frontend dasturlarni qurishda eng mashhur vositalardan biri.
// React ilovasini yaratish
// React ilovasini yaratish uchun quyidagi buyruqdan foydalanish mumkin:

// bash
// Копировать
// Редактировать
// npx create-react-app my-app
// cd my-app
// npm start
// Ushbu buyruqlar yangi React ilovasini ishga tushiradi.