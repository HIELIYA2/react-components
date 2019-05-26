import React, { Component } from "react";
import './Tags.css';
import Tag from '../tag/Tag';
// eslint-disable-next-line
import { string, number } from "prop-types";


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
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <input
                            type="text"
                            placeholder="Add a tag"
                            value={this.state.currentTag}
                            onChange={e => this.setState({ currentTag: e.target.value })} />
                        <button type="submit">Add</button>
                    </form>
                    <ul>
                        {this.state.tags.map((tag: ITag, index: number) =>
                            <li>
                                <Tag value={tag.title} isDeletable={true} onClick={this.remove} />
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