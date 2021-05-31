const Avatar = ({ src, theme, size }) => {
  return (
    <img
      src={src}
      alt='avatar'
      className={size}
      style={{ filter: `${theme ? 'invert(1)' : 'invert(0)'}` }}
    />
  );
};

export default Avatar;
