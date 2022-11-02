# -*- coding: utf-8 -*-
import csv
import serial
from constructor.telemetria import Telemetria
import pandas as pd

class SerialConect:
    # def unifyData(self, a, b, c, d, e, f, g, h, i, j, l, k, o, p, q, r, s, t, u):
    #     dfC = pd.read_csv('datasets\csvTransicao\light_1038_C.csv', skiprows=1)
    #     dfT = pd.read_csv('datasets\csvTransicao\flight_1038_T.csv', skiprows=1)
    #     dfC['TEMP'] = a
    #     dfC['VOLTAGE'] = b
    #     dfC['GPS_LATITUDE'] = c
    #     dfC['GPS_LONGITUDE'] = d
    #     dfC['GPS_ALTITUDE'] = f
    #     dfC['ALTITUDE'] = e
    #     dfT['TP_ALTITUDE'] = h
    #     dfT['TP_TEMP'] = i
    #     dfT['TP_VOLTAGE'] = j
    #     dfT['GYRO_R'] = l
    #     dfT['GYRO_P'] = k
    #     dfT['GYRO_Y'] = o
    #     dfT['ACCEL_R'] = p
    #     dfT['ACCEL_P'] = q
    #     dfT['ACCEL_Y'] = r
    #     dfT['MAG_R'] = s
    #     dfT['MAG_P'] = t
    #     dfT['MAG_Y'] = u
    #     dfT['PACKET_TYPE'] = g
    #     dfC['PACKET_TYPE'] = g
    
    # def unloadVet(self, arquivo, ConectionS):
    #     arquivo = csv.writer(arquivo)
    #     for value in range(len(ConectionS)):
    #         arquivo.writerow([ConectionS[value]])
    #     return arquivo
        
    # def carregaCsv(self, ConectionS):
    #     a = ConectionS.getTemperaturaC()
    #     b = ConectionS.getVoltageC()
    #     c = ConectionS.getGpsLatitudeC()
    #     d = ConectionS.getGpsLongitudeC()
    #     e = ConectionS.getAltitudeC()
    #     f = ConectionS.getGpsAlturaC()
    #     g = ConectionS.getPackegeType()
    #     h = ConectionS.getAltitudeP()
    #     i = ConectionS.getTemperaturaP()
    #     j = ConectionS.getVoltageP()
    #     l = ConectionS.getGiroscopioR()
    #     k = ConectionS.getGiroscopioP()
    #     o = ConectionS.getGiroscopioY()
    #     p = ConectionS.getAcelerometroR()
    #     q = ConectionS.getAcelerometroP()
    #     r = ConectionS.getAcelerometroY()
    #     s = ConectionS.getMagnetometroR()
    #     t = ConectionS.getMagnetometroP()
    #     u = ConectionS.getMagnetometroY()
    #     with open('datasets\csvTransicao\altitudeC.csv', 'w') as arquivoAltitudeC:
    #         arquivoAltitudeC = self.unloadVet(arquivoAltitudeC, e)
    #     with open('datasets\csvTransicao\temperaturaC.csv', 'w') as arquivoTemperaturaC:
    #         arquivoTemperaturaC = self.unloadVet(arquivoTemperaturaC, a)
    #     with open('datasets\csvTransicao\VoltageC.csv', 'w') as arquivoVoltageC:
    #         arquivoVoltageC = self.unloadVet(arquivoVoltageC, b)
    #     with open('datasets\csvTransicao\gpsLatitudeC.csv', 'w') as arquivoGpsLatitudeC:
    #         arquivoGpsLatitudeC = self.unloadVet(arquivoGpsLatitudeC, c)
    #     with open('datasets\csvTransicao\gpsLongitudeC.csv', 'w') as arquivoGpsLongitudeC:
    #         arquivoGpsLongitudeC = self.unloadVet(arquivoGpsLongitudeC, d)
    #     with open('datasets\csvTransicao\GpsAlturaC.csv', 'w') as arquivoGpsAlturaC:
    #         arquivoGpsAlturaC = self.unloadVet(arquivoGpsAlturaC, f)
    #     with open('datasets\csvTransicao\Counter.csv', 'w') as arquivoPackageType:
    #         arquivoPackageType = self.unloadVet(arquivoPackageType, g)
    #     with open('datasets\csvTransicao\AltitudeP.csv', 'w') as arquivoAltitudeP:
    #         arquivoAltitudeP = self.unloadVet(arquivoAltitudeP, h)
    #     with open('datasets\csvTransicao\TemperaturaP.csv', 'w') as arquivoTemperaturaP:
    #         arquivoTemperaturaP = self.unloadVet(arquivoTemperaturaP, i)
    #     with open('datasets\csvTransicao\VoltageP.csv', 'w') as arquivosetVoltageP:
    #         arquivosetVoltageP = self.unloadVet(arquivosetVoltageP, j)
    #     with open('datasets\csvTransicao\GiroscopioR.csv', 'w') as arquivoGiroscopioR:
    #         arquivoGiroscopioR = self.unloadVet(arquivoGiroscopioR, l)
    #     with open('datasets\csvTransicao\GiroscopioP.csv', 'w') as arquivoGiroscopioP:
    #         arquivoGiroscopioP = self.unloadVet(arquivoGiroscopioP, k)
    #     with open('datasets\csvTransicao\GiroscopioY.csv', 'w') as arquivoGiroscopioY:
    #         arquivoGiroscopioY = self.unloadVet(arquivoGiroscopioY, o)
    #     with open('datasets\csvTransicao\AcelerometroR.csv', 'w') as arquivoAcelerometroR:
    #         arquivoAcelerometroR = self.unloadVet(arquivoAcelerometroR, p)
    #     with open('datasets\csvTransicao\AcelerometroP.csv', 'w') as arquivoAcelerometroP:
    #         arquivoAcelerometroP = self.unloadVet(arquivoAcelerometroP, q)
    #     with open('datasets\csvTransicao\AcelerometroY.csv','w') as arquivoAcelerometroY:
    #         arquivoAcelerometroY = self.unloadVet(arquivoAcelerometroY, r)
    #     with open('datasets\csvTransicao\MagnetometroR.csv','w') as arquivoMagnetometroR:
    #         arquivoMagnetometroR = self.unloadVet(arquivoMagnetometroR, s)
    #     with open('datasets\csvTransicao\MagnetometroP.csv','w') as arquivoMagnetometroP:
    #         arquivoMagnetometroP = self.unloadVet(arquivoMagnetometroP, t)
    #     with open('datasets\csvTransicao\MagnetometroY.csv','w') as arquivoMagnetometroY:
    #         arquivoMagnetometroY = self.unloadVet(arquivoMagnetometroY, u)
        
    #     self.unifyData(self, a, b, c, d, e, f, g, h, i, j, l, o, q, r, s, t, u)
            
    #     ConectionS.clear()

    def Captura(self, Telemetria, porta='/dev/ttyACM0'):
        MSP = serial.Serial(str(porta), 9600, timeout=3)
        try:
            while True:
                MSP.flushOutput()
                MSP.flushInput()

                data = MSP.readline().decode()
                dataSplit = data.split(',')
                print(dataSplit)
                if (len(dataSplit) > 1):
                    if (dataSplit[3] == "c"):
                        Telemetria.setAltitudeC(dataSplit[0])
                        Telemetria.setTemperaturaC(dataSplit[1])
                        Telemetria.setVoltageC(dataSplit[2])
                        Telemetria.setPackagetType(dataSplit[3])
                        Telemetria.setGpsLatitudeC(dataSplit[4])
                        Telemetria.setGpsLongitudeC(dataSplit[5])
                        Telemetria.setGpsAlturaC(dataSplit[6])
                    elif (dataSplit[3] == "t"):
                        Telemetria.setAltitudeC(dataSplit[0])
                        Telemetria.setTemperaturaC(dataSplit[1])
                        Telemetria.setVoltageC(dataSplit[2])
                        Telemetria.setPackagetType(dataSplit[3])
                        Telemetria.setGpsLatitudeC(dataSplit[4])
                        Telemetria.setGpsLongitudeC(dataSplit[5])
                        Telemetria.setGpsAlturaC(dataSplit[6])
                        Telemetria.setAltitudeP(dataSplit[7])
                        Telemetria.setTemperaturaP(dataSplit[8])
                        Telemetria.setVoltageP(dataSplit[9])
                        Telemetria.setGiroscopioR(dataSplit[10])
                        Telemetria.setGiroscopioP(dataSplit[11])
                        Telemetria.setGiroscopioY(dataSplit[12])
                        Telemetria.setAcelerometroR(dataSplit[13])
                        Telemetria.setAcelerometroP(dataSplit[14])
                        Telemetria.setAcelerometroY(dataSplit[15])
                        Telemetria.setMagnetometroR(dataSplit[16])
                        Telemetria.setMagnetometroP(dataSplit[17])
                        Telemetria.setMagnetometroY(dataSplit[18])
                else:
                    MSP.close()
                    self.carregaCsv(Telemetria)
        except:
            self.carregaCsv(Telemetria)
        

            
#SerialConect().Captura(Telemetria(), 'com3')