import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { dataURLtoFile } from 'utils/prepare';
import { HelperText } from 'components/Form/_shared/styled';
import { FieldInput, Label, DocName } from './styled';

const acceptedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];

RFileUpload.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onFileLoad: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

export function RFileUpload({
  name,
  label,
  value, // base64 format
  placeholder,
  onFileLoad,
  disabled = false,
}) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const validateFile = (file) => {
    if (typeof file !== 'undefined') {
      if (!acceptedFileTypes.includes(file.type)) {
        return onFileSelectError({
          error: 'Wrong file type',
        });
      }
      if (file.size > 2000000) {
        return onFileSelectError({ error: 'Too large file' });
      }
      return onFileSelectSuccess(file, name);
    }

    return onFileSelectError({
      error: 'File load error',
    });
  };

  const handleFileInput = (e) => {
    e.preventDefault();

    if (e.target.files) {
      const file = e.target.files[0];
      validateFile(file);
    }
  };

  const onFileSelectSuccess = async (file, name) => {
    let fileBase64;
    setError(null);
    const fileData = new FileReader();
    fileData.onloadend = () => {
      fileBase64 = fileData.result;
      setImagePreviewUrl(fileBase64);
      onFileLoad(file, fileBase64, name);
    };
    fileData.readAsDataURL(file);
    setSelectedFile(file);
  };

  const onFileSelectError = ({ error }) => {
    setError(error);
  };

  useEffect(() => {
    if (value) {
      setImagePreviewUrl(value);
      setSelectedFile(dataURLtoFile(value, name));
    }
  }, [value]);

  return (
    <div>
      <div>
        <FieldInput
          // disabled={!!selectedFile || value}
          id={name}
          name={name}
          type="file"
          accept={acceptedFileTypes.join(', ')}
          placeholder={placeholder}
          onChange={!disabled ? handleFileInput : undefined}
          disabled={disabled}
        />
        <Label
          htmlFor={name}
          imgPreview={imagePreviewUrl?.toString()}
        >
          {label && (
            <DocName
              success={!!selectedFile}
              error={!!error}
            >
              {label}
            </DocName>
          )}
        </Label>
      </div>
      <HelperText>{error}</HelperText>
    </div>
  );
}
