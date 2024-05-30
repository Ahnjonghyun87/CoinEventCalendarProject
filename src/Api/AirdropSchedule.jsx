// import { useEffect, useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// // 코인마켓캡 API 키
// const API_KEY = "43db7435-bf13-4a79-8df2-7a11d1cc7545";

// // 에어드랍 일정을 가져오는 함수
// const fetchAirdropSchedules = async () => {
//   try {
//     const response = await fetch(
//       "https://pro-api.coinmarketcap.com/v1/cryptocurrency/airdrops",
//       {
//         method: "GET",
//         headers: {
//           "X-CMC_PRO_API_KEY": API_KEY,
//           Accept: "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("네트워크 응답이 올바르지 않습니다.");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("에어드랍 일정을 가져오는 중 오류 발생:", error);
//     throw error;
//   }
// };

// // 에어드랍 일정 데이터를 처리하는 함수
// const processAirdropSchedules = (data) => {
//   if (data && data.data) {
//     return data.data.map((airdrop) => ({
//       name: airdrop.name,
//       description: airdrop.description,
//       startDate: new Date(airdrop.start_date),
//       endDate: new Date(airdrop.end_date),
//     }));
//   }
//   return [];
// };

// const AirdropSchedule = () => {
//   const [airdrops, setAirdrops] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchAirdropSchedules()
//       .then((data) => {
//         const processedData = processAirdropSchedules(data);
//         setAirdrops(processedData);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   const tileContent = ({ date, view }) => {
//     if (view === "month") {
//       const airdrop = airdrops.find(
//         (airdrop) => date >= airdrop.startDate && date <= airdrop.endDate
//       );
//       return airdrop ? <p>{airdrop.name}</p> : null;
//     }
//   };

//   if (loading) {
//     return <div>로딩 중...</div>;
//   }

//   if (error) {
//     return <div>오류 발생: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>에어드랍 일정</h1>
//       <Calendar tileContent={tileContent} />
//     </div>
//   );
// };

// export default AirdropSchedule;
