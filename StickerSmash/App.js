import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";


export default function App() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runFacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: { width: 640, height: 480 }, scale: 0.8
    })
  }

  const detect = async (net) => {

    if (typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readState === 4
    ) {

    }
  }

  return (
    <View style={styles.container}>
      <div className='App' style={
        {
          height: "34rem"
        }
      }>
        <header className='App-header'>
          <Webcam ref={webcamRef}
            style={
              {
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "centr",
                zIndex: 9,
                width: 640,
                height: 480
              }
            } />
          <canvas ref={canvasRef}
            style={
              {
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: 0,
                right: 0,
                textAlign: "centr",
                zIndex: 9,
                width: 640,
                height: 480
              }
            }
          />
        </header>
      </div>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
