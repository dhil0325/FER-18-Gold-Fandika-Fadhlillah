export const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number)
}

export const formatSizeCar = (size) => {
  if (size === 'small') {
    return '2-4 Orang'
  }
  if (size === 'medium') {
    return '4-6 Orang'
  }
  if (size === 'large') {
    return '6-8 Orang'
  }
}

export const priceValue = (priceRange) => {
  if (priceRange == 'lt_400') {
    return [0, 400000]
  } else if (priceRange == '400_600') {
    return [400000, 600000]
  } else if (priceRange == 'gt_600') {
    return [600000, 10000000]
  } else {
    return ['', '']
  }
}
