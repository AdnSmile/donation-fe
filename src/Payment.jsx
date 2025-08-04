import { useLocation, useNavigate } from 'react-router-dom'

function Payment() {
  const location = useLocation()
  const navigate = useNavigate()
  const paymentData = location.state?.paymentData

  // Redirect jika tidak ada data payment
  if (!paymentData) {
    navigate('/')
    return null
  }

  const handleBayarDisini = () => {
    // Buka link payment di tab baru
    window.open(paymentData.linkPayment, '_blank')
  }

  const handleDonasiLagi = () => {
    // Kembali ke halaman utama
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Detail Pembayaran
          </h1>
          <p className="text-lg text-gray-600">
            Silakan lakukan pembayaran sesuai detail di bawah ini
          </p>
        </header>
        
        <main className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Donasi Berhasil Dibuat!
              </h2>
              <p className="text-gray-600">
                Silakan lakukan pembayaran untuk menyelesaikan donasi Anda
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Informasi Pembayaran
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bank:</span>
                    <span className="font-semibold text-gray-800">{paymentData.bank}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Jumlah Donasi:</span>
                    <span className="font-semibold text-gray-800">
                      Rp {parseInt(paymentData.amount).toLocaleString('id-ID')}
                    </span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Nomor VA:</span>
                      <span className="font-mono font-semibold text-gray-800 bg-gray-100 px-2 py-1 rounded">
                        {paymentData.vaNumber}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Penting:</strong> Simpan nomor VA di atas untuk melakukan pembayaran. 
                  Pembayaran dapat dilakukan melalui ATM, mobile banking, atau internet banking.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleBayarDisini}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200 font-medium"
                >
                  Bayar Donasi Disini
                </button>
                
                <button 
                  onClick={handleDonasiLagi}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-300 transition duration-200 font-medium"
                >
                  Donasi Lagi
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Payment 