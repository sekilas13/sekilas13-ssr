import { InView } from "react-intersection-observer";
import { Transition } from "react-spring/renderprops";

const From = { transform: "translate3d(-20px,0,0)", opacity: 0 };
const Enter = { transform: "translate3d(0px,0,0)", opacity: 1 };
const Leave = { opacity: 0 };

export default function FooterEmail() {
  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>
          <Transition items={inView} from={From} enter={Enter} leave={Leave}>
            {(show) =>
              show &&
              ((props) => (
                <p style={props}>
                  Ada pertanyaan ? Tanyakan lewat email{" "}
                  <a href="mailto:smpn13kir@gmail.com">smpn13kir@gmail.com</a>
                </p>
              ))
            }
          </Transition>
        </div>
      )}
    </InView>
  );
}
