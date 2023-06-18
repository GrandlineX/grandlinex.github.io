import React from 'react';

export type GIconType =
  | 'CORE'
  | 'KERNEL'
  | 'E-KERNEL'
  | 'CORE-M'
  | 'KERNEL-M'
  | 'E-KERNEL-M'
  | 'LOGO-TRANS'
  | 'LOGO-ALT-TRANS';

function GIcon({
  type,
  width,
  height,
  dark,
}: {
  type?: GIconType;
  width?: string;
  height?: string;
  dark?: boolean;
}) {
  let ico;
  const smoke = '#F2F3F4';
  const bg = '#505B6B';
  const color = {
    main: dark ? bg : smoke,
    alt: dark ? smoke : bg,
  };

  switch (type) {
    case 'CORE':
      ico = (
        <svg
          width={width}
          height={height}
          viewBox="0 0 300 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="200" y="200" width="50" height="50" fill={color.main} />
          <rect x="150" y="150" width="50" height="50" fill={color.main} />
          <rect x="100" y="100" width="50" height="50" rx="25" fill="#272E38" />
          <rect x="150" y="50" width="50" height="50" rx="25" fill="#272E38" />
          <rect y="200" width="50" height="50" rx="25" fill="#272E38" />
          <rect x="50" y="150" width="50" height="50" rx="25" fill="#272E38" />
          <rect x="50" y="50" width="50" height="50" fill={color.main} />
          <rect width="50" height="50" fill={color.main} />
          <rect x="200" width="50" height="50" rx="25" fill="#272E38" />
          <rect x="250" width="50" height="50" rx="25" fill="#272E38" />
        </svg>
      );
      break;
    case 'CORE-M':
      ico = (
        <svg
          width={width}
          height={height}
          viewBox="0 0 303 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="200" y="200" width="50" height="50" fill="#F2F3F4" />
          <rect x="253" y="200" width="50" height="50" fill="#272E38" />
          <rect x="200" y="200" width="50" height="50" fill="#272E38" />
          <rect x="150" y="150" width="50" height="50" fill="#272E38" />
          <rect
            x="100"
            y="100"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect
            x="150"
            y="50"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect y="200" width="50" height="50" rx="25" fill={color.main} />
          <rect
            x="50"
            y="150"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect x="50" y="50" width="50" height="50" fill="#272E38" />
          <rect width="50" height="50" fill="#272E38" />
          <rect x="200" width="50" height="50" rx="25" fill={color.main} />
        </svg>
      );
      break;
    case 'E-KERNEL':
      ico = (
        <svg
          width={width}
          height={height}
          viewBox="0 0 300 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="200" y="200" width="50" height="50" fill={color.main} />
          <rect x="150" y="150" width="50" height="50" fill={color.main} />
          <rect x="100" y="100" width="50" height="50" rx="25" fill="#EB5757" />
          <rect x="150" y="50" width="50" height="50" rx="25" fill="#EB5757" />
          <rect y="200" width="50" height="50" rx="25" fill="#EB5757" />
          <rect x="50" y="150" width="50" height="50" rx="25" fill="#EB5757" />
          <rect x="50" y="50" width="50" height="50" fill={color.main} />
          <rect width="50" height="50" fill={color.main} />
          <rect x="200" width="50" height="50" rx="25" fill="#EB5757" />
          <rect x="250" width="50" height="50" rx="25" fill="#EB5757" />
        </svg>
      );
      break;
    case 'E-KERNEL-M':
      ico = (
        <svg
          width={width}
          height={height}
          viewBox="0 0 303 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="200" y="200" width="50" height="50" fill="#EB5757" />
          <rect x="253" y="200" width="50" height="50" fill="#EB5757" />
          <rect x="150" y="150" width="50" height="50" fill="#EB5757" />
          <rect
            x="100"
            y="100"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect
            x="150"
            y="50"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect y="200" width="50" height="50" rx="25" fill={color.main} />
          <rect
            x="50"
            y="150"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect x="50" y="50" width="50" height="50" fill="#EB5757" />
          <rect width="50" height="50" fill="#EB5757" />
          <rect x="200" width="50" height="50" rx="25" fill={color.main} />
        </svg>
      );
      break;
    case 'KERNEL':
      ico = (
        <svg
          width={width}
          height={height}
          viewBox="0 0 300 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="200" y="200" width="50" height="50" fill={color.main} />
          <rect x="150" y="150" width="50" height="50" fill={color.main} />
          <rect x="100" y="100" width="50" height="50" rx="25" fill="#1E8ABD" />
          <rect x="150" y="50" width="50" height="50" rx="25" fill="#1E8ABD" />
          <rect y="200" width="50" height="50" rx="25" fill="#1E8ABD" />
          <rect x="50" y="150" width="50" height="50" rx="25" fill="#1E8ABD" />
          <rect x="50" y="50" width="50" height="50" fill={color.main} />
          <rect width="50" height="50" fill={color.main} />
          <rect x="200" width="50" height="50" rx="25" fill="#1E8ABD" />
          <rect x="250" width="50" height="50" rx="25" fill="#1E8ABD" />
        </svg>
      );
      break;
    case 'KERNEL-M':
      ico = (
        <svg
          width={width}
          height={height}
          viewBox="0 0 303 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="200" y="200" width="50" height="50" fill="#F2F3F4" />
          <rect x="253" y="200" width="50" height="50" fill="#1E8ABD" />
          <rect x="200" y="200" width="50" height="50" fill="#1E8ABD" />
          <rect x="150" y="150" width="50" height="50" fill="#1E8ABD" />
          <rect
            x="100"
            y="100"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect
            x="150"
            y="50"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect y="200" width="50" height="50" rx="25" fill={color.main} />
          <rect
            x="50"
            y="150"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect x="50" y="50" width="50" height="50" fill="#1E8ABD" />
          <rect width="50" height="50" fill="#1E8ABD" />
          <rect x="200" width="50" height="50" rx="25" fill={color.main} />
        </svg>
      );
      break;
    case 'LOGO-TRANS':
      ico = (
        <svg
          width={width}
          height={height}
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="200" y="200" width="50" height="50" fill={color.main} />
          <rect x="150" y="150" width="50" height="50" fill={color.main} />
          <rect x="100" y="100" width="50" height="50" fill={color.main} />
          <rect x="200" width="50" height="50" fill={color.main} />
          <rect x="150" y="50" width="50" height="50" fill={color.main} />
          <rect y="200" width="50" height="50" fill={color.main} />
          <rect x="50" y="150" width="50" height="50" fill={color.main} />
          <rect x="50" y="50" width="50" height="50" fill={color.main} />
          <rect width="50" height="50" fill={color.main} />
        </svg>
      );
      break;

    case 'LOGO-ALT-TRANS':
    default:
      ico = (
        <svg
          width={width}
          height={height}
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="200" y="200" width="50" height="50" fill={color.main} />
          <rect x="150" y="150" width="50" height="50" fill={color.main} />
          <rect
            x="100"
            y="100"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect
            x="150"
            y="50"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect y="200" width="50" height="50" rx="25" fill={color.main} />
          <rect
            x="50"
            y="150"
            width="50"
            height="50"
            rx="25"
            fill={color.main}
          />
          <rect x="50" y="50" width="50" height="50" fill={color.main} />
          <rect width="50" height="50" fill={color.main} />
          <rect x="200" width="50" height="50" rx="25" fill={color.main} />
        </svg>
      );
      break;
  }
  return ico;
}
GIcon.defaultProps = {
  type: undefined,
  width: undefined,
  height: '300px',
  dark: false,
};
export default GIcon;
