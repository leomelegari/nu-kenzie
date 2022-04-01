import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./style.css";

function Box({ children }) {
  return (
    <div className="bar">
        <div className="retangulo-maior">{children}</div>
        <div className="retangulo-menor">{children}</div>
    </div>
  );
}
// {children}

const List = ({ list, handleRemove, filtro }) => {
  if (list.length !== 0) {
    return list
      .filter(({ type }) =>
        filtro === "Todos" ? type !== filtro : type === filtro
      )
      .map((list, index) => {
        return (
          <div
            className="container-card"
            style={
              list.type === "Entrada"
                ? { borderLeft: "5px solid #03B898" }
                : { borderLeft: "5px solid #E9ECEF" }
            }
            key={index}
          >
            <div className="left-side">
              <h3>{list.description}</h3>
              <p>{list.type}</p>
            </div>
            <div className="right-side">
              <span>
                {Number(list.value).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <img
                src="./ButtonTrash.svg"
                alt="trash"
                id={index}
                onClick={() => handleRemove(list)}
              />
            </div>
          </div>
        );
      });
  } else {
    return (
      <div className="empty">
        <h3>{"Você ainda não possui nenhum lançamento" || <Skeleton />}</h3>
        <Box>
          <Skeleton animation="wave"/>
        </Box>
        <Box>
          <Skeleton animation="wave"/>
        </Box>
        <Box>
          <Skeleton animation="wave"/>
        </Box>
        {/* <h3>{"Você ainda não possui nenhum lançamento" || <Skeleton />}</h3>
        <img src="./NoCard.svg" alt="" />
        <div>
          <Skeleton count={5} height={30} />
          <div>
            <Skeleton count={1} height={10} />
          </div>
        </div> */}
      </div>
    );
  }
};

export default List;
