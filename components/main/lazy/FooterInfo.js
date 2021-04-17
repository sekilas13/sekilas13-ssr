import { InView } from "react-intersection-observer";
import { Transition } from "react-spring/renderprops";

const From = { transform: "translate3d(20px,0,0)", opacity: 0 };
const Enter = { transform: "translate3d(0px,0,0)", opacity: 1 };
const Leave = { opacity: 0 };

export default function FooterInfo() {
  return (
    <InView>
      {({ inView, ref }) => (
        <div ref={ref}>
          <Transition
            items={inView}
            from={From}
            enter={Enter}
            leave={Leave}
            config={{
              duration: 750
            }}
          >
            {(show) =>
              show &&
              ((props) => (
                <p style={props}>
                  Dibuat oleh{" "}
                  <a
                    href="https://github.com/sekilas13"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Karya Ilmiah Remaja
                  </a>{" "}
                  SMP Negeri 13 Bekasi | {new Date().getFullYear()}
                </p>
              ))
            }
          </Transition>
        </div>
      )}
    </InView>
  );
}
