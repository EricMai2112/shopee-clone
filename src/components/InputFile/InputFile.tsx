import React, { Fragment, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import config from 'src/constants/config'

interface Props {
  onChange?: (file?: File) => void
}

export default function InputFile({ onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File>()
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = event.target.files?.[0]
    if (fileFromLocal && (fileFromLocal.size >= config.maxSizeUpLoadAvatar || !fileFromLocal.type.includes('image'))) {
      toast.error('File hình ảnh phải < 1MB')
    } else {
      if (onChange) {
        onChange(fileFromLocal)
      }
    }
  }

  const handleUpload = () => {
    fileInputRef.current?.click()
  }
  return (
    <Fragment>
      <input
        className='hidden'
        type='file'
        accept='.jpg,.jpeg,.png'
        ref={fileInputRef}
        onChange={onFileChange}
        onClick={(event) => (event.target.value = null)}
      />
      <button
        className='flex h-10 cursor-pointer items-center justify-end rounded-sm border border-gray-300 hover:border-gray-500 transition-colors bg-white px-6 text-sm text-gray-600 shadow-sm'
        onClick={handleUpload}
        type='button'
      >
        Chọn ảnh
      </button>
    </Fragment>
  )
}
