import { useEffect, useState } from 'react'

export function useCrypto (code) {
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    setError(false)

    let res = await window.fetch(`/api/token/${code}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    res = await res.json()

    setLoading(false)
    setError(false)
    setData(res.data)
  }

  useEffect(() => {
    if (!code) {
      return setLoading(false)
    }

    fetchData()
  }, [code])

  return { data, loading, error }
}
