const axios = require('axios');

const API_KEY = '314299a10948b0d9c70c5599e2bcc9bb';

const http = axios.create({
    baseURL: 'http://api.marketstack.com/v1',
    timeout: 1000,
    headers: {}
});

function toChart(datas) {
    const labels = datas.map(data => {
        var date = new Date(data.date); 
        return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
    });

    const data = {
        labels: labels,
        datasets: [
                {
                label: datas[0].symbol+(' - Fermeture'),
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: datas.map(dt => dt.close),
            },
            {
                label: datas[0].symbol+(' - Ouverture'),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 0.5)',
                data: datas.map(dt => dt.open),
            }
        ]
    };

    return {
        type: 'line',
        data,
        options: {}
    }
}

function getEndOfDayData(symbols, page = 0, limit = 100) {
    const params = {
        access_key: API_KEY,
        sort: 'DESC',
        symbols,
        limit,
        page
    };
    return http.get('/eod', { params }).then(res => toChart(res.data.data));
}

module.exports = { getEndOfDayData };