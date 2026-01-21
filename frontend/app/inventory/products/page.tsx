'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import productsData from './sample/dummy_products.json'

type ProductData = {
  id: number
  name: string
  price: number
  description: string
}

export default function Page() {
  // 読み込みデータを保持
  const [data, setData] = useState<ProductData[]>([])

  useEffect(() => {
    setData(productsData)
  }, [])

  const [shownNewRow, setShownNewRow] = useState(false)
  const handleShowNewRow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShownNewRow(true)
  }
  const handleAddCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShownNewRow(false)
  }
  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    // バックエンドを使用した登録処理を呼ぶ
    setShownNewRow(false)
  }

  return (
    <>
      <h2>商品一覧</h2>
      <button type="button" onClick={handleShowNewRow}>
        商品を追加する
      </button>
      <table>
        <thead>
          <tr>
            <th>商品ID</th>
            <th>商品名</th>
            <th>単価</th>
            <th>説明</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shownNewRow ? (
            <tr>
              <td></td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td></td>
              <td>
                <button type="button" onClick={handleAddCancel}>
                  キャンセル
                </button>
                <button type="button" onClick={handleAdd}>
                  登録する
                </button>
              </td>
            </tr>
          ) : (
            ''
          )}
          {data.map((data: ProductData) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.description}</td>
              <td>
                <Link href={`/inventory/products/${data.id}`}>在庫処理</Link>
              </td>
              <td>
                <button type="button">更新・削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
