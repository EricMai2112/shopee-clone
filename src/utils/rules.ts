import type { RegisterOptions } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc'
    },
    pattern: {
      value: /^[A-Za-z1-9]+@gmail.com$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5 đến 160 kí tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài từ 5 đến 160 kí tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu là bắt buộc'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 đến 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 đến 160 kí tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại mật khẩu là bắt buộc'
    },
    minLength: {
      value: 6,
      message: 'Độ dài từ 6 đến 160 kí tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 6 đến 160 kí tự'
    }
  }
}
