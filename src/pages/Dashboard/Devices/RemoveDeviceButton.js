import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { devicesApi } from "../../../api";

const RemoveDeviceButton = ({ id, onRemove = () => { } }) => {
  const { t } = useTranslation()

  const handleRemove = () => {
    if (id && window.confirm("areYouSure")) {
      devicesApi.remove(id).then(() => {
        onRemove()
      })
    }
  }

  return (
    <Button variant="danger" type="button" onClick={handleRemove} size="sm">
      {t("remove")}
    </Button>
  )
}
export default RemoveDeviceButton