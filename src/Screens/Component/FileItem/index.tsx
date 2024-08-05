import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface File {
  uri: string;
  name: string;
  type: string;
}

interface FileItemProps {
  file: File;
  onRemove: () => void;
}

const FileItem = ({ file, onRemove }: FileItemProps) => {
  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'image/jpeg':
      case 'image/png':
        return <Image source={{ uri: file.uri }} style={styles.image} />;
      default:
        return <Text>{file.name}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {getFileIcon(file.type)}
      <Text style={styles.fileName}>{file.name}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  image: {
    width: 50,
    height: 50,
  },
  fileName: {
    flex: 1,
    marginLeft: 8,
  },
  removeText: {
    color: 'red',
  },
});

export default FileItem;
