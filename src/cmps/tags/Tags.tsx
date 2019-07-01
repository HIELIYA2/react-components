import React, { Component } from 'react';
import './Tags.css';
import Tag from '../tag/Tag';

interface ITag {
  id: string;
  title: string;
}

interface State {
  currentTag: string;
  tags: ITag[];
}

interface Props {}

class Tags extends Component<Props, State> {
  state = {
    currentTag: '',
    tags: [],
  };

  remove = (id: string) => {
    let index = this.state.tags.findIndex((element: any) => element.id === id);
    this.setState(state => ({ tags: state.tags.splice(index, 1) }));
  };

  handleSubmit = (e: React.SyntheticEvent) => {
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
    let arr: Array<string> = [];
    this.state.tags.forEach((element: any) => {
      arr.push(element.title);
    });
    const result = arr.find(Tag => Tag === tag);
    return !result;
  }

  makeId(length: number): string {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // use REGEX
    for (var i = 0; i < length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentTag: e.target.value });
  };

  render() {
    return (
      <section>
        <div className="tags-container">
          <form className="tags-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Add a tag"
              className="tags-input"
              value={this.state.currentTag}
              onChange={this.handleChange}
            />
            <button className="tags-add-button" type="submit">
              +
            </button>
          </form>
          <ul className="tags-ul">
            {this.state.tags.map((tag: ITag) => (
              <li key={tag.id}>
                <Tag value={tag.title} id={tag.id} isDeletable onClick={this.remove} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Tags;
