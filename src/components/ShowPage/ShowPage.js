// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action


import { connect } from 'react-redux';
import { showRequest } from "../../actions/showActions";
import { getShow, getIsLoading, getError } from "../../reducers/showsReducer";
import { ShowPage } from "./ShowPagePresentational";


const mapStateToProps = (state) => ({
	show: getShow(state),
	isLoading: getIsLoading(state),
	error: getError(state),
});

const mapDispatchToProps = { showRequest };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShowPage);
