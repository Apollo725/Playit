import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLanguages, getLexicon } from '../actions/actions'

class LanFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lan: 'en', //default : English
        }

        this.handleSelectLanguage = this.handleSelectLanguage.bind(this)
    }

    componentDidMount() {
        this.props.getLanguages()
        this.props.getLexicon(this.state.lan)
    }

    handleSelectLanguage(event) {
        const lan = event.target.value
        this.setState({
            lan: lan,
        })
        console.log("lan : " + lan)
        this.props.getLexicon(lan)
    }
    
    render() {
        const { languages, lexicon } = this.props
        console.log(lexicon)
        return (
            <div className="filter-component">
                <select onChange={this.handleSelectLanguage}>
                    {
                        languages && languages.map( (item, key) => {
                            return <option value={item.code} key={key}> {item.name} ({item.native})</option>
                        })
                    }
                </select>
                <div>
                    <table>
                        <thead>
                            <th>From</th>
                            <th>To</th>
                        </thead>
                        <tbody>
                            {
                                lexicon && Object.keys(lexicon).map( (key, index) => {
                                    return (
                                        <tr>
                                            <td>{key}</td>
                                            <td>{lexicon[key]}</td>
                                        </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        );
    }
}

function mapStateToProps(state) {
    return {
        languages: state.languages.data,
        lexicon: state.lexicon.data,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getLanguages: bindActionCreators(getLanguages, dispatch),
        getLexicon: bindActionCreators(getLexicon, dispatch),
    }
}

LanFilter.propTypes = {
    getLanguages: PropTypes.func.isRequired,
    getLexicon: PropTypes.func.isRequired,
    languages: PropTypes.array.isRequired,
    lexicon: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanFilter);