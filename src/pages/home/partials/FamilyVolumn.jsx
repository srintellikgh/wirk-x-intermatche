import React, { useEffect, useState } from 'react';
import BarChart from '../../../components/Charts/BarChart';

function FamilyVolumn() {
  const [volumnNumber, setVolumnNumber] = useState(0);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: '#5C80FF',
        barPercentage: 0.7,
        categoryPercentage: 0.8,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  });

  useEffect(() => {
    setVolumnNumber(2612);
    setChartData((prevData) => {
      prevData.labels = [
        '01/09',
        '02/09',
        '03/09',
        '04/09',
        '05/09',
        '06/09',
        '07/09',
      ];
      prevData.datasets[0].data = [40, 88, 60, 79, 70, 93, 8];
      return {
        ...prevData,
      };
    });
  }, []);

  return (
    <div className="card bg-primary-light">
      <div className="card-title">Volume traité</div>
      <div className="card-body">
        <div className="summary">
          <h3 className="summary-title">Nombre de dossiers</h3>
          <div className="summary-content text-primary">{volumnNumber}</div>
        </div>

        <BarChart data={chartData} height={200} />
      </div>
    </div>
  );
}

export default FamilyVolumn;
