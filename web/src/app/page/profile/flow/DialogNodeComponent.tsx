import { Dialog } from '../../../../models/Dialog'

export default function DialogNodeComponent({
  data: dialog,
}: {
  data: Dialog
}) {
  return (
    <>
      <div style={{ border: '1px solid red', height: 50, width: 100 }}>
        <label> {dialog.title}</label>
      </div>
    </>
  )
}

export type DialogNodeType = 'DIALOG_NODE'
DialogNodeComponent.Type = 'DIALOG_NODE' as DialogNodeType
