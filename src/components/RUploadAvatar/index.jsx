import PropTypes from 'prop-types';

import { RAvatar } from 'components/RAvatar';
import { Input, Label, Wrap, Upload } from './styled';

RUploadAvatar.propTypes = {
  size: PropTypes.number,
  photoPath: PropTypes.string,
  onFileUpload: PropTypes.func,
  accept: PropTypes.string,
};

export function RUploadAvatar({
  size,
  photoPath,
  onFileUpload = () => {},
  accept = '.jpg, .jpeg, .png, .bmp',
}) {
  const onUpload = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (typeof file !== 'undefined') {
        onFileUpload(file);
      }
    }
  };

  return (
    <Wrap>
      <RAvatar
        size={size}
        thumb={photoPath || undefined}
      />
      <Label thumb={!!photoPath}>
        <Input
          type="file"
          hidden
          accept={accept}
          onChange={onUpload}
        />
        <Upload />
      </Label>
    </Wrap>
  );
}
