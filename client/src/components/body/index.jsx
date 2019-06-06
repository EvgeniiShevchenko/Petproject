import React from "react";
import {Container, Row, Col, Button} from "reactstrap";

class Body extends React.Component {

    componentDidMount(){
        this.props.actionpost();
        // fetch("/")
        // .then(res => res.json())
        // .then(response => console.log(response))
    }

    render() {
        const anime = {

            "Name":"Созерцая колготки",
            "Img":"https://smotretanime.ru/posters/20434.27713357813.jpg",
            "Year":2019,
            "Status":"онгоинг",
            "NumOfSeries":12,
            "Rating":null,
            "Studio":"Yokohama Animation Lab",
            "Director":"Огава Юки",
            "Description":"Дождливое апрельское утро. Вишневые цветы поражены дождем и плавают в луже. Старшеклассники входят в школьные ворота, неся зонтики разных цветов. «Доброе утро, Рен», - поприветствовала Юа Рен, надев мокрые колготки перед шкафом с обувью. Когда Рен угрюмо взглянула на нее, Хоми, залитая водой, присоединилась к ним. Девушки обсуждают новый семестр. Эта история незаменимой школьной жизни трех девушек."
        };
        
        console.log(Array.isArray(this.props.post));
        console.log(this.props.post);

        const animelist = () => {
            if(this.props.post){
                const raz = this.props.post.map(map => {
                    return (
                        <Col xs="12" sm="3" key = {map._id}>
                            <div>
                                <img src={map.Img} width = "300px"  alt=""/>
                                <p>{`Имя:${map.Name} Жанр: dasddadasdsad`} <br/>{`Статус:${map.Status} Студия: ${map.Studio}`} <br/> {`Рейтинг: ${map.Rating}`}</p>
                            </div>
                            <Button onClick = {() => this.props.deleteanime(map._id)} color="danger" >Delete Anime</Button>
                            <Button onClick = {() => this.props.updateanime(map._id)}  color="primary">Update Anime</Button>
                        </Col>
                    )
                })
                return raz;
            }else{
                return null;
            }
        };


        return (
            <>
                <Container fluid>
                    <Button onClick = {() => this.props.createanime(anime)} color="success" >Add Anime</Button>
                    <Row>
                        {animelist()}
                    </Row>
                </Container>
            </>
        )
    }
}

export default Body;