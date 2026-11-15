export const formatINR = (n) => '₹' + n.toLocaleString('en-IN');
export const telHref = (phone) => 'tel:' + phone.replace(/\s/g, '');
