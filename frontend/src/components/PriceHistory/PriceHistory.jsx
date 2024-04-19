import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { server } from "../../server";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const PriceHistory = () => {
  const [itemName, setItemName] = useState("");
  const [source, setSource] = useState("Amazon");
  const [country, setCountry] = useState("US");
  const [priceHistory, setPriceHistory] = useState([]);
  const [selectedRecords, setSelectedRecords] = useState(10); // Default value

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        `${server}/price/price-history`,
        {
          itemName,
          country,
          source,
        },
        {
          timeout: 15000, // Timeout in milliseconds (15 seconds)
        }
      );
      setPriceHistory(response.data.data);
      console.log(response.data.data, "Response DATA");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && priceHistory && selectedRecords) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy the previous chart instance if it exists
      if (window.myChartInstance) {
        window.myChartInstance.destroy();
      }

      // Create a new chart instance
      window.myChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: priceHistory
            .slice(-selectedRecords)
            .map((entry) => entry.createdAt),
          datasets: [
            {
              label: "Price",
              data: priceHistory
                .slice(-selectedRecords)
                // .map((entry) => entry.price),
                .map((entry) => ({
                  x: entry.createdAt,
                  y: entry.price,
                  product_name: entry.product_name, // Storing the product_name in the data point
                })),
              borderColor: "darkblue",
              fill: false,
            },
          ],
        },
        options: {

          responsive: true,
          plugins: {

            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: `${itemName}'s Price Chart`
            },
            tooltip: {
              callbacks: {
                title: function (context) {
                  const tooltipItem = context[0];
                  const point = tooltipItem.chart.data.datasets[tooltipItem.datasetIndex].data[tooltipItem.dataIndex];
                  // Returning the product name as the tooltip title
                  return `Product: ${point.product_name}`;
                }
              }
            }
          }
        }
      });
    }
  }, [priceHistory, selectedRecords]);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl  text-[#053B50] font-bold mb-4">
        Item Price History
      </h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Enter item name"
          className="p-2 border border-gray-300"
        />
        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="p-2 border border-gray-300"
        >
          <option value="Amazon">Amazon</option>
          <option value="Ebay">Ebay</option>
        </select>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="p-2 border border-gray-300"
        >
          <option value="US">US</option>
          <option value="UK">UK</option>
        </select>
        <select
          value={selectedRecords}
          onChange={(e) => setSelectedRecords(Number(e.target.value))}
          className="p-2 border border-gray-300"
        >
          <option value={10}>Show 10 records</option>
          <option value={15}>Show 15 records</option>
          <option value={20}>Show 20 records</option>
          <option value={30}>Show 30 records</option>
          <option value={50}>Show 50 records</option>
          <option value={100}>Show 100 records</option>
        </select>
        <button onClick={handleSearch} className="p-2 bg-[#053B50] text-white">
          Search
        </button>
      </div>
      {priceHistory !== 0 && (
        <div>
          <h2 className="text-xl text-[#053B50] font-bold mb-2">
            Price History for {itemName} ({source} - {country})
          </h2>
          <div>
            <canvas id="myChart" ref={chartRef}></canvas>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceHistory;