// import React from 'react';
// import './Hero.css';

// export default function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-overlay" />
//       <div className="hero-content container">
//         <header className="hero-header">
//           <img src="/meta.png" alt="Metacyber logo" className="hero-logo" />
//           <nav className="hero-nav">
//             <button className="btn btn-login">Log In</button>
//             <button className="btn btn-signup">Sign Up</button>
//           </nav>
//         </header>

//         <div className="hero-main">
//           <div className="hero-text">
//             <h1 className="hero-title">Metacyber – Your Digital Cyber Café</h1>
//             <p className="hero-subtitle">
//               Aadhar, PAN, Passport, Tickets, Resumes &amp; more — all online, fast &amp; secure.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//           <div className="hero-image">
//             {/* Replace with an actual chart or illustration */}
//             <div className="chart-placeholder">[Chart Graphic]</div>
//           </div>
//         </div>
//       </div>
//     </section>
// );
// }


import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';
import './Hero.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Hero() {
  // sample data
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Orders Processed',
        data: [12, 25, 19, 30, 28, 35],
        borderColor: '#f5c518',
        backgroundColor: 'rgba(245,197,24,0.2)',
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#ccc' } }
    },
    plugins: {
      legend: { labels: { color: '#fff' } },
      tooltip: { backgroundColor: '#333', titleColor: '#fff', bodyColor: '#fff' }
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content container">
        <header className="hero-header">
          <img src="/meta.png" alt="Metacyber logo" className="hero-logo" />
          <nav className="hero-nav">
            <button className="btn btn-login">Log In</button>
            <button className="btn btn-signup">Sign Up</button>
          </nav>
        </header>

        <div className="hero-main">
          <div className="hero-text">
            <h1 className="hero-title">Metacyber – Your Digital Cyber Café.</h1>
            <p className="hero-subtitle">
              Aadhar, PAN, Passport, Tickets, Resumes &amp; more — all online, fast &amp; secure.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="hero-chart">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}
