import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { CameraView as ViewCamera } from 'expo-camera';

import { CameraViewProps } from './types'
import { styles } from './styles'


export default function CameraView({
    cameraRef,
    isRecording,
    onRecord,
    onStopRecording,
}: CameraViewProps) {
    return (
        <ViewCamera style={styles.container} ref={cameraRef}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={isRecording ? onStopRecording : onRecord}
                    style={styles.buttonRecording}
                >
                    <Text style={styles.buttonText}>{isRecording ? "Stop recording" : "Start record"}</Text>
                </TouchableOpacity>
            </View>
        </ViewCamera>
    )
}