const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const realTelemetryController = require('../controller/realTelemetryController');
const TelemetryController = require('../controller/TelemetryController');

module.exports = {
    Serial () {
        const port = new SerialPort({ path: "/dev/ttyACM0", baudRate: 9600, timeout: 3 });
        const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));
        const list = [];
        const dataAux = [];

        const mediaList = (aux) => {
            console.log(aux);
            const media = [];
            for (let j = 0; j <= 16; j++) {
                for (let k = 0; k < aux.length; k++) {
                    media[j] = (aux[k] / 10);
                }
            }
            return media;
        };

        const somaLista = (aux) => {
            const sum = [];
            for (let j = 0; j <= 16; j++) {
                for (let k = 0; k < aux.length; k++) {
                    sum[j] += aux[k];
                }
            }
            return media;
        };

        const pushList = (list) => {
            const data = {};
            if (list.length === 17) {
                data.count = list[0];
                data.Temperatura = list[1];
                data.Altitude = list[2];
                data.Tensao = list[3];
                data.GpsLatitude = list[4];
                data.GpsLongitude = list[5];
                data.GpsAltura = list[6];
                data.GiroscopioP = list[7];
                data.GiroscopioR = list[8];
                data.GiroscopioY = list[9];
                data.AcelerometroP = list[10];
                data.AcelerometroR = list[11];
                data.AcelerometroY = list[12];
                data.MagnetometroP = list[13];
                data.MagnetometroR = list[14];
                data.MagnetometroY = list[15];
                data.Outro = list[16];
                realTelemetryController.insertRealTelemetry(data);
            }
            console.log('count', list[0]);
            
            dataAux.push(list);
            if ((list[0] % 10) === 0) {
                let i = 0;
                const aux = [];
                // while (i < dataAux.length) {
                //     aux[0] = aux[0] + parseFloat(dataAux[i]);
                //     aux[1] = aux[1] + parseFloat(dataAux[i]);
                //     aux[2] = aux[2] + parseFloat(dataAux[i]);
                //     aux[3] = aux[3] + parseFloat(dataAux[i]);
                //     aux[4] = aux[4] + parseFloat(dataAux[i]);
                //     aux[5] = aux[5] + parseFloat(dataAux[i]);
                //     aux[6] = aux[6] + parseFloat(dataAux[i]);
                //     aux[7] = aux[7] + parseFloat(dataAux[i]);
                //     aux[8] = aux[8] + parseFloat(dataAux[i]);
                //     aux[9] = aux[9] + parseFloat(dataAux[i]);
                //     aux[10] = aux[10] + parseFloat(dataAux[i]);
                //     aux[11] = aux[11] + parseFloat(dataAux[i]);
                //     aux[12] = aux[12] + parseFloat(dataAux[i]);
                //     aux[13] = aux[13] + parseFloat(dataAux[i]);
                //     aux[14] = aux[14] + parseFloat(dataAux[i]);
                //     aux[15] = aux[15] + parseFloat(dataAux[i]);
                //     aux[16] = aux[16] + parseFloat(dataAux[i]);
                //     console.log('teste dois', parseFloat(aux[0]));
                //     i = i + 1;
                // }
                const soma = somaLista(dataAux);
                dataAux.splice(0, dataAux.length);
                console.log(aux);

                const media = mediaList(aux);

                // const data = {
                //     count: media[0],
                //     Temperatura: media[1],
                //     Altitude: media[2],
                //     Tensao: media[3],
                //     GpsLatitude: media[4],
                //     GpsLongitude: media[5],
                //     GpsAltura: media[6],
                //     GiroscopioP: media[7],
                //     GiroscopioR: media[8],
                //     GiroscopioY: media[9],
                //     AcelerometroP: media[10],
                //     AcelerometroR: media[11],
                //     AcelerometroY: media[12],
                //     MagnetometroP: media[13],
                //     MagnetometroR: media[14],
                //     MagnetometroY: media[15],
                //     Outro: media[16],
                // };
                console.log(media);
                // TelemetryController.insertTelemetry(data);
                media.splice(0, media.length);
            }
        };

        parser.on('data', function (data) {
            if (data !== '88888888') {
                list.push(parseFloat(data));
            } else {
                pushList(list);
                list.splice(0, list.length);
            }
        });
    },
};