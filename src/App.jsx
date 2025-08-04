import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function App() {
  const [customAmount, setCustomAmount] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [bank, setBank] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const createDonation = () => {
    setIsLoading(true)
    axios
      .post("/donate",
        {
          amount: getDonationValueForAPI(),
          name: fullName,
          email: email,
          note: message,
          bank: bank
        },
        { headers: { 'Accept': 'application/json' } }
      )
      .then((res) => {
        setIsLoading(false)
        // Navigate ke payment page dengan data response
        navigate('/payment', { 
          state: { 
            paymentData: res.data.data 
          } 
        })
        console.log('Response:', res.data)
      })
      .catch((err) => {
        setIsLoading(false)
        console.error('Error:', err)
        alert('Terjadi kesalahan saat membuat donasi. Silakan coba lagi.')
      })
  }

  // Fungsi untuk format currency ke format Rupiah
  const formatCurrency = (value) => {
    if (!value) return ''
    // Hapus semua karakter non-digit
    const numericValue = value.toString().replace(/\D/g, '')
    // Format dengan separator ribuan
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  // Fungsi untuk mendapatkan nilai numerik murni (untuk API)
  const getNumericValue = (formattedValue) => {
    return formattedValue.replace(/\D/g, '')
  }

  const handleCustomAmountChange = (e) => {
    const inputValue = e.target.value
    const formattedValue = formatCurrency(inputValue)
    setCustomAmount(formattedValue)
  }

  // Fungsi untuk mendapatkan nilai yang akan dikirim ke API
  const getDonationValueForAPI = () => {
      return getNumericValue(customAmount)
  }

  const handleSubmit = () => {
    // Di sini Anda bisa menambahkan logic untuk mengirim ke server
    if (!fullName || !email || !bank || !getDonationValueForAPI()) {
      alert('Mohon lengkapi semua field sebelum mengirim donasi.')
      return
    }
    createDonation()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-700 font-medium">Memproses donasi...</p>
            <p className="text-sm text-gray-500 mt-2">Mohon tunggu sebentar</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Website Donasi
          </h1>
          <p className="text-lg text-gray-600">
            Mari berbagi kebaikan untuk sesama
          </p>
        </header>
        
        <main className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Form Donasi
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama
                </label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  disabled={isLoading}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  disabled={isLoading}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Masukkan email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Tujuan
                </label>
                <select 
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  disabled={isLoading}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Pilih Bank Tujuan</option>
                  <option value="bca">BCA</option>
                  <option value="bri">BRI</option>
                  <option value="bni">BNI</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jumlah Donasi
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">Rp</span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    disabled={isLoading}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="0"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Minimal donasi Rp 1.000
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan (Opsional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  disabled={isLoading}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="Tulis pesan dukungan Anda..."
                ></textarea>
              </div>
              
              <button 
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Memproses...' : 'Donasi Sekarang'}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
