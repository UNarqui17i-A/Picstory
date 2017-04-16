FROM python
COPY . /src
RUN pip install eve
RUN pip install boto3
RUN pip install awscli
RUN pip install -U flask-cors
RUN chmod +x /src/credentials.sh
RUN ./src/credentials.sh
EXPOSE 8015
CMD ["python", "/src/storage_operation.py"]
