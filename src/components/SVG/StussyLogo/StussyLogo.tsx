import * as React from "react";
import styled from "styled-components";
import { SVGProps } from "@/types/common";

const StussyLogo = ({
  width = "70px",
  height,
  color = "#FFFFFF",
  ...props
}: SVGProps) => (
  <Wrapper $width={width} $height={height}>
    <SVGWrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.756 192.756"
      {...props}
    >
      <g fillRule="evenodd" clipRule="evenodd">
        <path fill="transparent" d="M0 0h192.756v192.756H0V0z" />
        <path
          fill={color}
          d="M94.457 42.171l-.981.343-1.061.639-.76.706-.41.888-.256 1.136-.088.989.088.975.256 1.135.41.874.611.545.846.477.772.304 1.009.147 1.196.007.989-.154.934-.444.996-.699.691-.725.371-.956.195-1.203.008-1.036-.203-.954-.389-1.075-.523-.773-1.213-.618-1.633-.331-1.855-.197zM57.695 54.737l-1.054.014-1.173.018-1.273.021-1.353.024-1.413.026-1.452.028-1.472.029-1.472.032-1.452.032-1.413.033-1.353.034-1.273.033-1.173.033-1.054.032-1.115.044-1.26.077-1.375.101-1.462.114-1.52.118-1.547.112-1.546.096-1.516.069-1.457.033-1.367-.013-1.248-.07-1.101-.136-1.076-.323-1.243-.51-1.056-.463-.659-.324-.772-.417-.618-.404-.411-.403-.464-.51-.451-.383-1.069-.497-1.337-.402L12.496 51l-1.519.828-1.512 1.437-.916 1.472-.045 1.735.491 2.063.699 1.655.888 1.088 1.277 1.108 1.21.787 1.016.383 1.263.289 1.096.082 1.493-.356 1.706-.644 1.472-.477 1.145-.216 1.361-.208 1.493-.193 1.54-.175 1.5-.149 1.376-.119 1.167-.084 1.024-.058 1.129-.051 1.22-.044 1.296-.038 1.356-.033 1.401-.027 1.432-.022 1.447-.019 1.447-.016 1.432-.012 1.401-.01 1.356-.008 1.296-.006 1.22-.005 1.13-.005 1.024-.005 1.729-.014 2.017.007 1.708.007-.13 1.046-.174 1.13-.213 1.203-.247 1.263-.276 1.312-.299 1.349-.318 1.374-.331 1.388-.338 1.389-.342 1.378-.339 1.355-.331 1.321-.319 1.274-.3 1.217-.277 1.146-.25 1.064-.215.971-.168.796-.19.89-.21.979-.23 1.062-.248 1.14-.264 1.211-.278 1.278-.292 1.339-.304 1.395-.315 1.445-.324 1.49-.333 1.528-.339 1.561-.344 1.59-.348 1.611-2.054.131-1.932.117-1.813.104-1.698.088-1.586.078-1.477.064-1.371.055-1.267.043-1.167.035-1.07.025-.976.016-.885.01-.797.002-.712-.004-.63-.01-.982.041-1.149.02-.882-.242-.093-.154-.074-.223-.013-.195.168-.342.296-.35.289-.242 1.03-.561 1.276-.506 1.445-.457 1.541-.412 1.559-.369 1.501-.33 1.368-.295 1.158-.264 1.292-.283 1.525-.289 1.312-.182.653.014.773.033.653-.047 1.23-.391 1.397-.625 1.109-.672.711-.68.726-.901.431-.86.02-.767-.16-.907-.221-.767-.371-.827-.544-.927-.591-.687-.72-.368-.921-.268-.8-.087-1.385.364-1.58.718-1.345.605-1.13.357-1.342.393-1.469.416-1.511.426-1.466.423-1.335.408-1.118.38-1.001.368-1.124.417-1.223.461-1.297.498-1.349.53-1.375.556-1.38.575-1.358.589-1.314.596-1.246.598-1.154.593-1.038.584-.899.566-1.316.977-1.404 1.291-.835 1.318-.018 1.021.309 1.201.463.941.922.82 1.29.74 1.163.518 1.281.375 1.581.324 1.691.268 1.611.201 1.338.129 1.09.068 1.243.045 1.362.021 1.447.004 1.498-.014 1.515-.029 1.498-.041 1.447-.051 1.362-.057 1.243-.062 1.09-.066 1.238-.059 1.522-.062 1.662-.055 1.659-.033 1.513-.002.326.164.131.316.025.303-.048.645-.098.756-.145.859-.188.959-.228 1.047-.264 1.131-.296 1.205-.325 1.273-.351 1.334-.373 1.389-.391 1.434-.406 1.473-.417 1.502-.426 1.527-.43 1.543-.431 1.553-.428 1.555-.747 1.594-.967 1.836-.546 1.633.095 1.688.463 1.93.737 1.445 1.064.811 1.482.703 1.573.512 1.335.234 1.647-.143 1.909-.498 1.507-.686.941-.873.94-1.217.74-1.074.289-.551.316-.645.329-.492.367-.264.828-.488 1.556-.943 2.553-1.619-.109 1.436-.203 1.488-.109.934-.061.438-.141.49-.161.398-.544.766-.699.869-.444.807-.086.864.101 1.049.161.887.236 1.002.383 1.15.496.861.909.584 1.214.469 1.069.242 1.338.061 1.572-.16 1.218-.441.639-.836.511-1.162.357-1.016.376-1.285.323-1.539.055-1.305-.249-.604-.396-.68-.289-.584-.31-1.4-.214-1.68-.048-1.439.155-.949.303-1.107.295-.928.242-.846.329-.988.363-.787.262-.336.35-.352.322-.277.854-.449 1.055-.457.895-.389.881-.518 1.029-.592.922-.217.208.135.208.223.127.215.147 1.037-.074 1.262-.074 1.076-.034.605-.033.699.067.564.195.342.283.35.275.242.955.344 1.204.188 1.036.041.975-.129 1.123-.275.915-.348.652-.398.706-.551.512-.559.193-.496.114-.625.053-.537.016-1.578-.117-1.9-.156-1.902-.103-1.578-.041-.834-.02-.975.061-.814.222-.785.349-.908.363-.746.524-.705.699-.76.645-.586.524-.322.639-.338.524-.303.505-.309.578-.396.425-.41.598-1.162.491-1.471.237-1.285-.055-.605-.162-.707-.175-.586-.094-.234-.134-.283-.134-.234-.303-.223-.39-.25-.242-.281.007-.518.187-.631.168-.539.142-.719.168-.852.263-.66.296-.328.422-.316.397-.107.389.281.336.531.208.482.301 1.051.218 1.217.15 1.35.094 1.447.051 1.506.021 1.529.003 1.516-.001 1.467.007 1.383.027 1.258.061 1.104.119 1.107.165 1.268.197 1.391.214 1.471.217 1.514.203 1.512.177 1.471.134 1.391.076 1.27.005 1.105-.162 1.494-.339 1.791-.368 1.793-.246 1.492-.154 1.184-.114 1.398.087 1.184.458 1.115.752 1.215.839.834 1.076.344 1.344.107 1.137-.059.955-.264 1.082-.479 1.156-.584.82-.352.861-.645.578-.691.281-1.129.041-1.418-.141-1.189-.445-1.244-.719-1.398-.705-1.125-.404-.408-.518-.457-.404-.43-.213-.451-.195-.564-.133-.49-.252-1.025-.25-1.146-.244-1.252-.24-1.334-.234-1.396-.227-1.439-.219-1.463-.207-1.463-.197-1.443-.184-1.406-.168-1.348-.154-1.268-.139-1.168-.119-1.049-.314-1.748-.295-2.049.248-1.627.189-.168.295-.135.27-.09 1.189-.213 1.439-.135 1.562-.068 1.566-.018 1.447.021 1.203.051 1.34.078 1.611.125 1.732.189 1.715.27 1.549.365 1.242.48.355.234.363.344.215.355-.006.236-.088.281-.086.236-.445 1.135-.58 1.316-.66 1.424-.691 1.461-.672 1.42-.602 1.311-.479 1.123-.494 1.168-.586 1.412-.584 1.504-.486 1.441-.291 1.225-.1 1.176.039 1.404.242 1.156.6 1.016.9 1.033.939.574 1.332-.211 1.525-.746 1.271-.732.322-.17.475-.246.621-.324.768-.398.904-.473 1.041-.549 1.172-.623 1.297-.695 1.42-.77 1.537-.842 1.648-.912 1.758-.986 1.863-1.057 1.041-.795 1.215-1.014 1.236-1.119 1.107-1.121.824-1.014.705-1.291.639-1.615.344-1.432.02-.848-.121-.988-.262-.787-1.123-1.061-1.6-.98-1.404-.76-1.143-.596-1.332-.625-1.477-.646-1.572-.66-1.619-.668.162-.361.209-.41.203-.344.154-.262.201-.289.217-.201 1.236-.289 1.553-.006 1.34.113 1.686.293 1.723.311 1.717.326 1.664.336 1.572.34 1.434.336 1.252.33 1.029.318.762.299.449.275.121.223.068.289.021.242-.246 1.365-.535 1.596-.676 1.666-.674 1.568-.521 1.307-.412 1.133-.508 1.344-.549 1.449-.533 1.453-.463 1.359-.336 1.156-.287 1.266-.293 1.543-.26 1.643-.191 1.564-.084 1.307v1.131l.1 1.336.262 1.09.533.812.771.846.775.572.785.256.988.121.848.014 1.088-.188 1.258-.357 1.029-.389 1.518-.916 1.713-1.223 1.439-1.055 1.102-.896 1.285-1.166 1.375-1.168 1.365-.9 1.262-.359.207.061.217.141.148.16.1.283.061.348.02.303-.262 1.318-.49 1.512-.361 1.299-.143.887-.109 1.049.039.867.277.705.432.768.438.605.523.49.699.496.645.309.936.154 1.123-.006.955-.148.941-.336 1.061-.543.801-.596.416-.721.342-.92.176-.801-.061-.66-.18-.76-.121-.658-.096-1.35-.043-1.639-.027-1.645-.045-1.365-.074-.645-.094-.76-.014-.645.389-1.275.652-1.475.697-1.461.523-1.242.379-1.268.398-1.549.398-1.646.369-1.562.322-1.297.25-1.117.238-1.33.25-1.467.279-1.521.326-1.498.395-1.395.479-1.211.586-.947.223-.195.289-.162.24-.035.27.283.195.459.109.402.209 1.115.141 1.279.084 1.408.035 1.502-.004 1.557-.033 1.58-.051 1.562-.061 1.51-.061 1.422-.049 1.297-.031 1.137-.016 1.031-.025 1.127-.033 1.213-.043 1.283-.049 1.344-.055 1.393-.061 1.426-.062 1.453-.066 1.463-.066 1.463-.068 1.451-.066 1.426-.064 1.391-.062 1.342-.057 1.279-.053 1.209-.047 1.123-.039 1.027-.02 1.006-.002 1.09.014 1.168.025 1.234.033 1.293.039 1.34.043 1.381.041 1.412.039 1.432.031 1.443.021 1.445.008 1.439-.008 1.424-.027 1.398-.049 1.363-.074 1.32-.105 1.268-.135 1.207-.17 1.135-.209 1.053-.25.965-.322.613-.469.664-.322.592-.234 1.602-.014 1.91.248 1.582.611 1.256.975 1.363 1.035.936 1.131.295 1.424.033 1.211-.146 1.223-.393 1.371-.664.963-.812.375-1.285.053-1.639-.066-1.385-.129-1.703-.295-1.969-.51-1.602-1.102-1.396-.369-.814-.037-.41.008-1.014.006-1.119.002-1.211-.002-1.289-.002-1.355-.006-1.406-.006-1.445-.006-1.471-.008-1.484-.008-1.48-.01-1.467-.008-1.439-.008-1.396-.006-1.344-.006-1.273-.004-1.195-.002-1.098.002-.99.002-.869-.027-.889-.027-.99-.027-1.082-.025-1.164-.025-1.238-.023-1.303-.021-1.355-.021-1.4-.018-1.436-.02-1.459-.016-1.477-.014-1.482-.014-1.48-.012-1.467-.008-1.445-.008-1.412-.004-1.373-.004-1.32v-1.26l.002-1.189.004-1.111.008-1.021.031-1.232.057-1.477.07-1.6.076-1.6.072-1.477.055-1.232.047-1.049.047-1.117.051-1.18.051-1.236.051-1.29.055-1.335.055-1.377.055-1.414.055-1.445.057-1.471.059-1.492.057-1.507.059-1.518.059-1.522.699-.996.691-1.263.477-1.116.424-1.567.309-1.888.021-1.607-.344-1.688-.699-1.908-1.006-1.286-1.266-.331-1.643.063-1.643.339-1.266.5-1.121.976-1.061 1.424-.619 1.337.025 1.365.369 1.607.328 1.366.162.645.168.759.062.645-.041.249-.08.275-.061.229-.25 1.029-.263 1.144-.285 1.25-.301 1.331-.311 1.391-.32 1.429-.328 1.448-.33 1.447-.332 1.425-.33 1.383-.326 1.321-.32 1.239-.309 1.135-.297 1.012-.365 1.246-.447 1.504-.529 1.561-.613 1.41-.697 1.059-.1.074-.143.072-.119.033-.504-.209-.539-.395-.465-.33-.428-.229-.498-.256-.369-.27-.088-.113-.074-.143-.049-.135-.229-1.209-.154-1.43-.09-1.578-.035-1.656.004-1.659.033-1.592.053-1.451.057-1.238.135-1.184.258-1.382.324-1.513.342-1.575.303-1.571.211-1.5.066-1.361-.133-1.154-.424-.941-.697-1.001-.746-.68-1.258-.403-1.572-.149-1.299.16-1.002.633-1.01.994-.641.994-.018 1.338.309 1.613.102 1.358-.512 1.406-.834 1.587-.734 1.346-.594 1.191-.723 1.417-.791 1.527-.803 1.522-.752 1.402-.646 1.165-.348.768-.438.887-.51.607-.121.033-.148-.008-.123-.025-.527-.125-.639-.211-.76-.283-.891-.338-1.027-.379-1.176-.4-1.332-.41-1.498-.403-1.672-.379-1.854-.34-2.047-.284-2.246-.214 1.199-2.148.986-1.72.736-1.165.492-.571.625-.625.57-.491 1.441-1.002 1.76-1.089 1.5-.921.719-.438.854-.532.658-.538.934-1.25.914-1.606.594-1.452.273-1.527.094-1.828-.188-1.527-.385-.812-.617-.866-.686-.551-1.391-.221-1.707.181-1.393.402-1.303.888-1.371 1.297-1.062 1.19-.822 1.16-.877 1.47-.881 1.583-.826 1.499-.721 1.219-.67.994-.809 1.158-.893 1.254-.918 1.286-.887 1.25-.801 1.15-.658.983-.543.936-.566 1.137-.594 1.269-.621 1.333-.656 1.33-.691 1.26-.732 1.123-.773.914-.82.643-.121.014-.148-.008-.121-.006-1.541-.189-1.801-.295-1.539-.27-1.566-.129-1.82-.195-1.285-.609-.039-.123v-.146l.039-.123.746-.926 1.148-.91 1.338-.857 1.311-.767 1.062-.637.82-.531.969-.584.861-.391.592-.082.705-.027.572-.102 1.242-.773 1.311-1.135 1.002-1.075.889-1.211.887-1.526.486-1.392-.008-.813-.195-.934-.371-.693-1.15-.624-1.586-.37-1.391-.122-1.09.148-1.256.356-1.029.43-.9.605-.98.839-.74.786-.363.766-.35.948-.402.727-.865.726-1.135.705-1.307.679-1.377.652-1.352.621-1.223.587-.998.549-1.092.752-1.277.96-1.346 1.016-1.299.917-1.135.664-.988.451-1.197.414-1.008.068-.223-.135-.209-.223-.141-.215-.154-.686-.033-.838.006-.705v-1.097l.033-1.255.059-1.374.078-1.453.094-1.492.104-1.491.105-1.45.104-1.37.096-1.249.082-1.088.061-1.433.1-1.674.201-1.413.68-1.545.961-1.76.619-1.546.127-1.459-.082-1.721-.436-1.339-1.15-.933-1.668-.706-1.491-.229-1.653.512-1.787 1.075-1.23 1.215-.296.961-.082 1.21-.014 1.022.06 1.594.141 1.875-.02 1.593-.182 1.043-.271 1.153-.346 1.245L90.238 82l-.454 1.364-.486 1.392-.503 1.4-.507 1.388-.496 1.354-.471 1.302-.432 1.227-.377 1.133-.31 1.017-.311 1.125-.328 1.276-.341 1.4-.352 1.49-.357 1.555-.361 1.59-.504.248-.639.209-.544.086-.76-.039-.86-.182-.64-.322-.1-.168-.06-.215-.021-.189-.118-1.1-.055-1.264-.002-1.389.039-1.473.069-1.513.09-1.515.098-1.475.097-1.393.083-1.271.061-1.107.036-1.271.012-1.527.024-1.65.071-1.643.155-1.504.274-1.233.551-.961.786-1.062.531-.961.134-.888-.007-1.056-.127-.888-.479-1.56-.78-1.753-1.001-1.178-1.418-.328-1.793.114-1.459.395-1.103.801L73.704 71l-.641 1.182.143 1.238.518 1.452.303 1.258-.08 1.1-.205 1.247-.304 1.358-.379 1.432-.429 1.466-.454 1.463-.452 1.423-.427 1.345-.376 1.229-.299 1.075-.277 1.08-.303 1.184-.328 1.274-.348 1.351-.364 1.416-.376 1.468-.386 1.506-.391 1.531-.392 1.545-.148.209-.216.215-.208.148-.349.061-.417-.02-.349-.041-.566-.006-.747-.02-.767-.125-.053-1.125-.053-1.25-.052-1.346-.049-1.418-.046-1.46-.041-1.477-.034-1.467-.027-1.43-.018-1.366-.008-1.276.003-1.159.016-1.015.013-.974.006-1.074.001-1.162-.001-1.238-.001-1.304.001-1.358.006-1.402.013-1.434.023-1.455.034-1.464.048-1.463.065-1.451.084-1.427.105-1.392.129-1.346.155-1.289.183-1.22.214-1.141.248-1.05.282-.948.32-.835.321.004.342.006.363.008.386.009.408.012.432.013.456.015.48.017.505.018.532.02.558.021.585.023.613.024.642.026.67.027.7.029.73.03.761.032.793.033.825.034.858.035.891.037.925.038.959.039.995.04 1.031.042 1.067.042 1.105.043 1.142.044 1.181.045 1.22.046 1.259.047 1.3.048 1.34.049 1.382.05 1.424.051 1.467.051 1.511.052 1.555.053 1.598.054 1.645.054 1.691.055 1.736.055 1.785.056 1.83.057 1.881.057 1.93.058 1.979.058 2.029.058 2.08.059 2.133.059 2.184.06 2.236.06 2.291.06 2.344.06 2.398.06 2.455.06 2.393.737 1.43.737.787.515 1.311.51 1.646.235 1.352-.173 1.277-.963 1.203-1.519.715-1.465.174-1.365-.088-1.689-.32-1.662-.52-1.279-.174-.245-.289-.338-.404-.397-.525-.423-.645-.415-.768-.374-.891-.299-1.018-.19-1.145-.049-1.275.127-1.404.336-1.539.579-1.674.855-1.811 1.164-.639.023-.721.023-.799.024-.873.023-.941.025-1.008.024-1.068.024-1.125.024-1.178.024-1.227.023-1.271.022-1.311.022-1.348.022-1.379.021-1.406.02-1.43.019-1.449.018-1.465.017-1.475.015-1.482.015-1.484.013-1.482.012-1.477.009-1.467.008-1.453.006-1.434.004-1.412.002h-1.385l-1.354-.002-1.319-.004-1.28-.006-1.236-.009-1.188-.011-1.137-.014-1.08-.017-1.051-.02-1.155-.027-1.245-.035-1.322-.041-1.384-.046-1.434-.051-1.468-.055-1.49-.058-1.497-.06-1.492-.061-1.471-.062-1.438-.06-1.391-.059-1.329-.057-1.254-.053-1.165-.049-1.062-.044-.947-.039.192-1.109.172-1.207.155-1.289.141-1.355.13-1.407.122-1.445.118-1.467.115-1.474.117-1.467.122-1.445.129-1.408.141-1.355.153-1.289.17-1.207.19-1.11.218-.996.378-1.152.557-1.342.639-1.438.624-1.438.512-1.342.302-1.152.127-1.547-.054-1.828-.254-1.507-.495-1.288-.751-1.514-.927-1.333-1.021-.746-1.492.136-1.706.792-1.292.94-.894 1.284-.753 1.7-.432 1.506.055 1.715.323 2.023.195 1.715-.02 1.088-.057 1.217-.09 1.323-.119 1.404-.143 1.461-.162 1.496-.177 1.507-.188 1.492-.194 1.456-.196 1.395-.193 1.309-.186 1.201-.174 1.068-.183 1.102-.234 1.225-.276 1.326-.31 1.407-.334 1.466-.352 1.505-.358 1.522zm-3.556 46.886l.242-2.225.262-2 .276-1.785.285-1.58.289-1.384.287-1.198.28-1.021.269-.855.251-.698.081-.262.12-.289.161-.202.295-.096.395.031.214.367.096 2.949.088 2.454.079 2.01.072 1.616.065 1.275.059.986.053.746.047.559.043.422-.768-.006-.706-.008-.606.014-.698.047-.833.068-.698.065zm-1.055 5.816l2.655-.021 1.49-.061.827.082.269.066.276.137.209.369-.046 2.258-.028 2.084-.015 1.912-.005 1.752.001 1.594.002 1.447v1.307l-.006 1.172-.017 1.045-.031.926-.049.812-.07.709-.097.609-.102.303-.148.35-.142.281-.094.189-.134.215-.134.168-1.271.889-1.625.867-1.412.686-1.447.699-1.727.752-1.527.418-.31-.008-.356-.066-.269-.107-.154-.201-.134-.289-.074-.264.308-1.656.292-1.662.278-1.658.268-1.645.258-1.621.251-1.588.246-1.545.244-1.492.244-1.43.246-1.355.25-1.275.257-1.184.265-1.08.276-.969.29-.848.305-.717.322-.576.343-.424.365-.264.387-.092zm10.457-.363l1.743-.016.853.043.176.244-.114.428-.134.521-.114.467-.679 2.523-.39 1.553-.438.596-.067-.033-.066-.176-.047-.334-.221-2.131-.221-2.037-.281-1.648zm8.407-5.635l.215-.65.282-.766.256-.633.344-1.189.458-1.357.705-.646.081.074.061.152.04.135.121.82.04.98.02.82.06.762.061.908.06.982-.585.039h-.698l-.585-.039-.269-.096-.316-.141-.351-.155zm-.362 5.817l3.254.061-.016 3.047-.062 2.199-.081 1.51-.076.984-.046.617.009.41-.955.43-.894.396-.773.289-.76.209-.901.215-.779.148.355-1.668.323-1.545.255-1.307.269-1.348.315-1.639.31-1.645.253-1.363zm50.23 2.26l.396-.316.383-.262.336-.176.283-.094.35-.074.303-.012 1.109.328 1.236.598 1.027.551 1.238.633 1.432.793 1.098.834.24.328.223.418.08.369-.066.201-.148.209-.148.162-.959.812-1.246.871-1.367.861-1.318.777-1.105.625-1.248.646-1.535.732-1.551.697-1.299.545-.533.242-.625.27-.531.061-.154-.141-.143-.23-.094-.201.047-.598.176-.693.168-.578.465-1.688.619-1.957.605-1.627.639-1.271.84-1.457.777-1.188zm36.372-15.941l.715-.559.549.124.334 1.068-.248 2.813-.158 1.996-.119 1.33-.131.818-.188.455-.129.08-.326.012-.631-.123-1.424-.48-.916-.262-.523-.16-.254-.082-.303-.119-.195-.162.035-.355.182-.432.176-.357.496-.787.652-.887.537-.768.605-.973.699-1.175.565-1.015zm-6.93 13.109l.449-.295.566-.074.49.008 1.184.121 1.391.309 1.162.322.754.229.854.316.652.391.369.484.336.637.229.564.148.982.047 1.191-.014 1.021-.053 1.002-.115 1.189-.193 1.002-.297.619-.432.691-.418.559-1.217 1.256-1.553 1.363-1.357 1.117-1.352 1.096-1.646 1.223-1.492.875-.807.322-.988.27-.826-.02-.471-.369-.416-.586-.229-.551.021-1.352.369-1.605.363-1.352.318-1.551.424-1.857.473-1.842.473-1.5.547-1.449.74-1.711.797-1.684.72-1.361zM81.319 38.464l-1.149.304-1.276.639-.949.745-.523.914-.41 1.196-.182 1.054.155 1.331.423 1.538.537 1.229.707.969.968 1.016.947.667.935.174 1.142-.007.937-.167.947-.553.987-.854.687-.854.443-1.191.269-1.485.041-1.271-.222-1.236-.47-1.396-.604-1.075-.754-.604-1.002-.538-.895-.363-.465-.094-.577-.053-.647-.035z"
        />
      </g>
    </SVGWrapper>
  </Wrapper>
);

const Wrapper = styled.div<{ $width: string; $height: string | undefined }>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

const SVGWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export default StussyLogo;
