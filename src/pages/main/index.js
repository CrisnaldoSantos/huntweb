import React, { Component } from "react";
import api from "../../services/api";
import "./style.css";
import {Link} from "react-router-dom";

export default class Main extends Component{
    state={
        products: [],
        productInfo: {},
        page: 1,
    }
//Função para executar na criação do componente
    componentDidMount(){
        this.loadProducts();
    };

    loadProducts = async (page=1) => {
        const response = await api.get(`/products?page=${page}`);
        const {docs , ...productInfo}=response.data;
        this.setState({products: docs, productInfo, page})
    };
//Função para retroceder a página
    prevPage=() =>{
        const {page, productInfo} =this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    };
//Função para avançar a página  
    nextPage=() =>{
        const {page, productInfo} =this.state;
        if (page === productInfo.pages) return;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    };

    render(){
        const {productInfo,page,product}=this.state;
        return(
            <div className="product-list">
                {this.state.products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage}>
                        Anterior
                    </button>
                    <button disabled={page===productInfo.pages} onClick={this.nextPage}>
                        Próximo
                    </button>
                </div>

            </div>
        );
    }
}