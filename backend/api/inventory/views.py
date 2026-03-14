from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from .models import Product
from .serializers import ProductSerializer


class ProductView(APIView):
    """
    商品操作に関する関数
    """

    def get(self, request, format=None):
        """
        商品の一覧を取得する
        """
        queryset = Product.objects.all()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ProductModelView(ModelViewSet):
    """
    商品操作に関する関数
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
