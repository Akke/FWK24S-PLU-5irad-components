import { Outlet, Route, Routes } from "react-router-dom";
import withRouter from "../../../decorators/withRouter";
import BoardSquare from "./BoardSquare";
import withBoard from "../../../decorators/withBoard";

const meta = {
  title: "Board/BoardSquare",
  component: BoardSquare,
  decorators:[withRouter, withBoard],
};

export default meta;

const mockUser = {
  id: 1,
  username: "test"
}

const mockUserEmpty = null;

const ProtectedRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : "Not Logged In";
}

const AppTemplate = () => {
  return <Outlet />;
}

export const Default = {
  parameters: { router: { initialEntries: ["/game/1234"] } },
  render: () => (
    <Routes>
        <Route exact path="/game/:gameId" element={<ProtectedRoute isAuthenticated={mockUser} />}>
            <Route element={<AppTemplate />}>
                <Route index element={<BoardSquare />} />
            </Route>
        </Route>
    </Routes>
  )
};

export const Cross = {
  args: { tile: 1 }
};

export const Circle = {
  args: { tile: 2 }
};