import { getIcon } from '../../utils/icons.js';

/** Renders an icon from a string key used in /data files. */
export default function Icon({ name, size = 22, ...rest }) {
  const Cmp = getIcon(name);
  return <Cmp size={size} strokeWidth={1.8} {...rest} />;
}
