import * as HIcons from "@heroicons/react/20/solid"

const DynamicIcon = (props) => {
  const {...icons} = HIcons

  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className={props.style} aria-hidden="true" />
    </>
  )
}

export default DynamicIcon