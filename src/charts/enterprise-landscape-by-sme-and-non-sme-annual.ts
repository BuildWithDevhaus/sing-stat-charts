import type { ChartItem } from 'chart.js';
import Chart from 'chart.js/auto'


//


(async function() {
  const url = `https://tablebuilder.singstat.gov.sg/api/table/tabledata/M600981`
  const data = await fetch(
    url
  ).then(response => response.json());

  console.log(data);

  new Chart(
    document.getElementById('chart') as ChartItem,
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count),
          }
        ]
      }
    }
  );
})();
 