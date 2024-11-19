

export default function Logo ({ size = "40px", color = "#FFFFFF" }) {
    return (
      <div>
          <svg id="shape" enable-background="new 0 0 512 512" height={size} viewBox="0 0 512 512" width={size} xmlns="http://www.w3.org/2000/svg"><path id="_x31_3" d="m355 256c0 54.676-44.324 99-99 99s-99-44.324-99-99 44.324-99 99-99 99 44.324 99 99zm-297 99c54.676 0 99-44.324 99-99s-44.324-99-99-99zm396-198c-54.676 0-99 44.324-99 99s44.324 99 99 99z" fill={color}/></svg>
      </div>
    )
  }