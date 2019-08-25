// Реализуйте страницу поиска.
// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import { connect } from 'react-redux';
import { SearchPresentation } from './SearchPresentation';


const mapStateToProps = (state) => ({
	shows: state.shows,
});

const mapDispatchToProps = (dispatch) => {

};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SearchPresentation);
