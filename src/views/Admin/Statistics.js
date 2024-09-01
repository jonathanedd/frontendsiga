// import React, { useEffect, useRef, useState } from "react";
// import Chart from "chart.js/auto";
// import axios from "axios";

// const API_URL = "http://localhost:4000/api/v2"; // Cambiar según la URL de tu backend

// const Statistics = () => {
//   const chartRef = useRef(null);
//   const [statistics, setStatistics] = useState([]);
//   const [chartInstance, setChartInstance] = useState(null);

//   const fetchStatistics = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       // Verifica si el token está presente
//       if (!token) {
//         console.error("No token found");
//         return;
//       }

//       const response = await axios.get(`${API_URL}/statistics`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const statisticsData = response.data.usersByRole;

//       const groupedStatistics = Object.values(
//         statisticsData.reduce((acc, curr) => {
//           acc[curr.rol] = acc[curr.rol] || { rol: curr.rol, count: 0 };
//           acc[curr.rol].count += 1;
//           return acc;
//         }, {})
//       );

//       setStatistics(groupedStatistics); // Asumiendo que el backend devuelve un objeto con una propiedad usersByRole
//     } catch (error) {
//       // Verifica si es un error de autenticación
//       if (error.response && error.response.status === 403) {
//         console.error("Forbidden: Invalid token or permissions", error);
//       } else {
//         console.error("Error fetching statistics:", error);
//       }
//     }
//   };

//   const renderChart = () => {
//     if (!chartRef.current || statistics.length === 0) return;

//     if (chartInstance) {
//       chartInstance.destroy(); // Destruye el gráfico existente si existe
//     }

//     console.log("STATISTICS DESDE EL FRONTEND:", statistics);

//     const totalUsers = statistics.reduce((sum, entry) => sum + entry.count, 0);
//     const percentages = statistics.map(
//       (entry) => ((entry.count / totalUsers) * 100).toFixed(2),
//       "%"
//     );

//     const ctx = chartRef.current.getContext("2d");
//     const newChartInstance = new Chart(ctx, {
//       type: "doughnut",
//       data: {
//         labels: statistics.map((entry) => `${entry.rol} (${entry.count})`),
//         datasets: [
//           {
//             label: "Usuarios por Rol",
//             data: percentages,
//             backgroundColor: [
//               "rgba(54, 162, 235, 0.6)",
//               "rgba(75, 192, 192, 0.6)",
//               "rgba(255, 206, 86, 0.6)",
//               "rgba(153, 102, 255, 0.6)",
//               "rgba(255, 99, 132, 0.6)",
//               "rgba(0, 0, 0, 0.6)",
//             ],
//             borderColor: [
//               "rgba(54, 162, 235, 1)",
//               "rgba(75, 192, 192, 1)",
//               "rgba(255, 206, 86, 1)",
//               "rgba(153, 102, 255, 1)",
//               "rgba(255, 99, 132, 1)",
//               "rgba(0, 0, 0, 1)",
//             ],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           tooltip: {
//             callbacks: {
//               label: function (tooltipItem) {
//                 const label = tooltipItem.label || "";
//                 const value = tooltipItem.raw || 0;
//                 return `${label}: ${value}`;
//               },
//             },
//           },
//           legend: {
//             display: true,
//             position: "top",
//             labels: {
//               usePointStyle: true,
//             },
//           },
//         },
//         width: 500,
//         height: 500,
//       },
//     });

//     setChartInstance(newChartInstance); // Guarda la instancia del nuevo gráfico
//   };

//   useEffect(() => {
//     fetchStatistics();
//   }, []);

//   useEffect(() => {
//     renderChart();
//   }, [statistics]);

//   return (
//     <div
//       className="statistics-container"
//       style={{ width: "500px", height: "500px" }}
//     >
//       <h2>Usuarios por Rol</h2>
//       <canvas ref={chartRef}></canvas>
//     </div>
//   );
// };

// export default Statistics;

import React, { useEffect, useRef, useState, useCallback } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const API_URL = "http://localhost:4000/api/v2"; // Cambiar según la URL de tu backend

const Statistics = () => {
  const chartRef = useRef(null);
  const [statistics, setStatistics] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  const fetchStatistics = async () => {
    try {
      const token = localStorage.getItem("token");

      // Verifica si el token está presente
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.get(`${API_URL}/statistics`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const statisticsData = response.data.usersByRole;

      const groupedStatistics = Object.values(
        statisticsData.reduce((acc, curr) => {
          acc[curr.rol] = acc[curr.rol] || { rol: curr.rol, count: 0 };
          acc[curr.rol].count += 1;
          return acc;
        }, {})
      );

      setStatistics(groupedStatistics); // Asumiendo que el backend devuelve un objeto con una propiedad usersByRole
    } catch (error) {
      // Verifica si es un error de autenticación
      if (error.response && error.response.status === 403) {
        console.error("Forbidden: Invalid token or permissions", error);
      } else {
        console.error("Error fetching statistics:", error);
      }
    }
  };

  const renderChart = useCallback(() => {
    if (!chartRef.current || statistics.length === 0) return;

    if (chartInstance) {
      chartInstance.destroy(); // Destruye el gráfico existente si existe
    }

    console.log("STATISTICS DESDE EL FRONTEND:", statistics);

    const totalUsers = statistics.reduce((sum, entry) => sum + entry.count, 0);
    const percentages = statistics.map((entry) =>
      ((entry.count / totalUsers) * 100).toFixed(2)
    );

    const ctx = chartRef.current.getContext("2d");
    const newChartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: statistics.map((entry) => `${entry.rol} (${entry.count})`),
        datasets: [
          {
            label: "Usuarios por Rol",
            data: percentages,
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(0, 0, 0, 0.6)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(0, 0, 0, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const label = tooltipItem.label || "";
                const value = tooltipItem.raw || 0;
                return `${label}: ${value}`;
              },
            },
          },
          legend: {
            display: true,
            position: "top",
            labels: {
              usePointStyle: true,
            },
          },
        },
      },
    });

    setChartInstance(newChartInstance); // Guarda la instancia del nuevo gráfico
  }, [statistics, chartInstance]);

  useEffect(() => {
    fetchStatistics();
  }, []);

  useEffect(() => {
    renderChart();
  }, [statistics, renderChart]); // Añadir renderChart a las dependencias

  return (
    <div
      className="statistics-container"
      style={{ width: "500px", height: "500px" }}
    >
      <h2>Usuarios por Rol</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Statistics;
