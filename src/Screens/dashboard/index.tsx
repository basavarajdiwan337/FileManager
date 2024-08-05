import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import styles from '../../GlobalVariable/stylesheet';

interface File {
  uri: string;
  name: string;
  type: string;
}

const DashboardScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const [files, setFiles] = useState<File[]>(route.params.files || []);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleRemoveFile = (uri: string) => {
    setFiles(files.filter(file => file.uri !== uri));
  };

  const handleOpenModal = (file: File) => {
    setSelectedFile(file);
    setModalVisible(true);
  };

  const getFileIcon = (type: string) => {
    if (type.includes('image')) {
      return <View style={[styles.fileIcon, styles.imageIcon]}><Text style={styles.fileIconText}>IMG</Text></View>;
    } else if (type.includes('pdf')) {
      return <View style={[styles.fileIcon, styles.pdfIcon]}><Text style={styles.fileIconText}>PDF</Text></View>;
    } else if (type.includes('word')) {
      return <View style={[styles.fileIcon, styles.docIcon]}><Text style={styles.fileIconText}>DOC</Text></View>;
    }
    return <View style={[styles.fileIcon, styles.unknownIcon]}><Text style={styles.fileIconText}>FILE</Text></View>;
  };

  const renderItem = ({ item }: { item: File }) => (
    <View style={styles.fileContainer}>
      {item.type.includes('image') ? (
        <Image source={{ uri: item.uri }} style={styles.fileImage} />
      ) : (
        getFileIcon(item.type)
      )}
      <Text style={styles.fileName}>{item.name}</Text>
      <TouchableOpacity
        style={styles.previewButton}
        onPress={() => handleOpenModal(item)}
      >
        <Text style={styles.previewButtonText}>Preview</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveFile(item.uri)}
      >
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
     
    </View>
  );

  return (
    <View style={styles.dashboardContainer}>
      {files.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Uploaded Files</Text>
        </View>
      ) : (
        <FlatList
          scrollEnabled={true}
          data={files}
          renderItem={renderItem}
          keyExtractor={(item) => item.uri}
        />
      )}
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => navigation.navigate('UploadFileScreen', { files })}
      >
        <Text style={styles.uploadButtonText}>Upload More Files</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedFile && (
              <>
                {selectedFile.type.includes('image') ? (
                  <Image source={{ uri: selectedFile.uri }} style={styles.modalImage} />
                ) : (
                  <View style={styles.modalFileContent}>
                    <Text style={styles.modalFileName}>{selectedFile.name}</Text>
                    <Text style={styles.fileType}>{selectedFile.type}</Text>
                  </View>
                )}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default DashboardScreen;
