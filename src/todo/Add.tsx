import { useState } from 'react'

type Props = {
  onAdd: (description: string) => void
}

export function Add({ onAdd }: Props) {
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const [description, setDescription] = useState<string>('')

  const onChange = (e) => {
    setDescription(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    onAdd(description)
    setDescription('')
    setIsAdding(false)
  }

  return (
    <div
      style={{
        margin: '20px',
      }}
    >
      <button type="button" onClick={() => setIsAdding(true)}>
        Add
      </button>

      {isAdding && (
        <form onSubmit={onSubmit}>
          <label htmlFor="description">Add description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={onChange}
          />
        </form>
      )}
    </div>
  )
}
