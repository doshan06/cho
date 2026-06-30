/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 背景层
        'page': '#FAFBFC',
        'card': '#FFFFFF',
        'divider': '#E5E7EB',
        // 文字
        'title': '#111827',
        'body': '#374151',
        'muted': '#9CA3AF',
        // 品牌色
        'brand': '#4F46E5',
        'brand-hover': '#4338CA',
        // 功能色
        'success': '#10B981',
        'hot': '#F59E0B',
        'danger': '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
