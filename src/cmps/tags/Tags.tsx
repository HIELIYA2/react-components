import React, { Component } from "react";
import './Tags.css';
import Tag from '../tag/Tag';
// eslint-disable-next-line
import { string, number } from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);

class Tags extends Component {

    state = {
        currentTag: '',
        tags: []
    }

    remove = () => {
        console.log('button X clicked');
        console.log();
    }

    handleSubmit(e: any) {
        e.preventDefault();
        let title = this.state.currentTag;
        let id = this.makeId(9);
        if (title.length <= 0) return
        this.setState({
            currentTag: '',
            tags: [
                ...this.state.tags,
                { title, id }
            ]
        })
    }

    makeId(length: number): string {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    render() {
        console.log(this.state);
        return (
            <section>
                <div className="tags-container">
                    <form className="tags-form" onSubmit={e => this.handleSubmit(e)}>
                        <input
                            type="text"
                            placeholder="Add a tag"
                            className="tags-input"
                            value={this.state.currentTag}
                            onChange={e => this.setState({ currentTag: e.target.value })} />
                        <button className="tags-add-button" type="submit">
                            <FontAwesomeIcon icon="plus" />
                        </button>
                    </form>
                    <ul className="tags-ul">
                        {this.state.tags.map((tag: ITag, index: number) =>
                            <li className="tags-li">
                                <Tag value={tag.title} key={index} isDeletable={true} onClick={this.remove} />
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        )
    }
}

interface ITag {
    id: string;
    title: string;
}

export default Tags;