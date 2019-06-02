import React, { Component } from 'react';
import './Tags.css';
import Tag from '../tag/Tag';
// import { string, number } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import { any, element } from 'prop-types';

library.add(faPlus);

class Tags extends Component {
    state = {
        currentTag: '',
        tags: [],
    };

    remove = (id: string) => {
        let index = this.state.tags.findIndex((element: any) => element.id === id);
        this.setState(this.state.tags.splice(index, 1));
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        let isDouble = this.checkDouble(this.state.currentTag);
        if (isDouble) {
            let title = this.state.currentTag;
            let id = this.makeId(9);
            if (title.length <= 0) return;
            this.setState({
                currentTag: '',
                tags: [...this.state.tags, { title, id }],
            });
        } else {
            this.setState({
                currentTag: '',
            });
        }
    };

    checkDouble(tag: string) {
        let arr: any[] = [];
        this.state.tags.forEach((element: any) => {
            arr.push(element.title);
        });
        arr.push(tag);
        let uniqueItems = [...new Set(arr)];
        return uniqueItems.length === arr.length;
    }

    makeId(length: number): string {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    render() {
        return (
            <section>
                <div className="tags-container">
                    <form className="tags-form" onSubmit={e => this.handleSubmit(e)}>
                        <input
                            type="text"
                            placeholder="Add a tag"
                            className="tags-input"
                            value={this.state.currentTag}
                            onChange={e => this.setState({ currentTag: e.target.value })}
                        />
                        <button className="tags-add-button" type="submit">
                            <FontAwesomeIcon icon="plus" />
                        </button>
                    </form>
                    <ul className="tags-ul">
                        {this.state.tags.map((tag: ITag, index: number) => (
                            <li className="tags-li" key={index}>
                                <Tag value={tag.title} id={tag.id} isDeletable={true} onClick={this.remove} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }
}

interface ITag {
    id: string;
    title: string;
}

export default Tags;
