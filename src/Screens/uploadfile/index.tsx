import React, { useState } from 'react';
import { ProgressBarAndroid, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import styles from '../../GlobalVariable/stylesheet';

interface File {
  uri: string;
  name: string;
  type: string;
}

const UploadScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const existingFiles = route.params?.files || [];

  const selectFiles = async () => {
    try {
      const res: DocumentPickerResponse[] = await DocumentPicker.pick({
        type: ['image/*', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
        allowMultiSelection: true,
      });

      const newFiles: File[] = res.map(item => ({
        uri: item.uri,
        name: item.name || 'Unnamed',
        type: item.type || 'unknown',
      }));

      setFiles(newFiles);
      startUpload(newFiles);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  const startUpload = async (files: File[]) => {
    setUploading(true);
    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setUploading(false);
        navigation.navigate('DashboardScreen', { files: [...existingFiles, ...files] });
      }
    }, 500); 
  };

  return (
    <View style={styles.uploadContainer}>
       <Text style={styles.uploadTitle}>Upload Your Image, PDF, Doc or any Documents</Text>
      {uploading ? (
        <View style={styles.progressContainer}>
          <Text>Upload Progress: {uploadProgress}%</Text>
          <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={uploadProgress / 100} />
        </View>
      ) : (
        <TouchableOpacity style={styles.uploadButton} onPress={selectFiles}>
          <Text style={styles.uploadButtonText}>Pick A File</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};


export default UploadScreen;
